// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useDispatch, useSelector } from 'react-redux';
// import { setOpen } from '../Redux/movieSlice';
// import VideoBackground from './VideoBackground';

// export default function MovieDialog() {
// //   const [open, setOpen] = React.useState(false);
// const {open,id}=useSelector(store=>store.movie.open)
// const dispatch=useDispatch()
// const handleClose=()=>{
// dispatch(setOpen(false))
// }
 

//   return (
//     <React.Fragment>
     
//       <Dialog
//         open={open}
       
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
        
//         <DialogContent>
            
//           <DialogContentText id="alert-dialog-description">
//             <h1>kfgjdfkjgdkfg</h1>
//            {/* <VideoBackground movieId={id}/> */}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
         
            
        
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../Redux/movieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const open=useSelector(store=>store.movie.open)
  const id=useSelector(store=>store.movie.id)
  // const {open,id}=useSelector(store=>store.movie.open)
  const dispatch=useDispatch()
const handleClose=()=>{
dispatch(setOpen(false))
}
  
  return (
    <React.Fragment>
      
      <Dialog
        open={open}
      
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <VideoBackground movieId={id} bool={true}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          
            
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}