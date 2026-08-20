export const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateUser=v=>{const e={};if(!v.name?.trim())e.name='Name is required';if(!v.email?.trim())e.email='Email is required';else if(!emailRegex.test(v.email))e.email='Enter a valid email';return e;};
