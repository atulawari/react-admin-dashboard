import jwt from "jsonwebtoken";
export function protect(req, res, next) {
  try {
    const h = req.headers.authorization;
    if (!h?.startsWith("Bearer "))
      return res.status(401).json({ message: "Authentication required" });
    jwt.verify(h.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

// import jwt from "jsonwebtoken";

// export function protect(req, res, next) {
//   try {
//     const h = req.headers.authorization;

//     if (!h?.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "Authentication required" });
//     }

//     const token = h.split(" ")[1];

//     // 1. Capture the decoded token payload
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // 2. Attach it to the request object for downstream routes to use
//     req.user = decoded;

//     next();
//   } catch (error) {
//     // 3. Log the actual error to your terminal console for easier debugging
//     console.error("JWT Verification Error:", error.message);
//     console.log("Current Secret:", process.env.JWT_SECRET);
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// }
