import {useSelector} from 'react-redux';
export default function useUsers(){return useSelector(s=>s.users);}
