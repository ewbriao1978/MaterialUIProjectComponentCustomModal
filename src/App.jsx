import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import myLogo from './assets/mylogo.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { BarChart } from '@mui/x-charts/BarChart';


// isso é meu!!! Das ist meine!!!!!
import MYModal from './components/myModal'
import './App.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
  const [userState, setUser] = useState("Username...");
  const [emailState, setEmail] = useState("Email...");
  const [open,setOpen] = useState(false);
  const [openChart,setOpenChart] = useState(false);



  const doSomething = async(e) =>{
    window.console.log("Recebi dados");
    window.console.log("User:"+userState);
    window.console.log("Email"+emailState);
    alert(
       "Recebi os dados!!"
    )
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModalChart = () => setOpenChart(true);
  const handleCloseModalChart = () => setOpenChart(false);


  return (
    <>
      <div> 
          <img src={myLogo} className="logo" alt="Vite logo" />
      </div>
 
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 2, width: '30ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="user" label="User:" variant="outlined" 
      defaultValue={userState} onChange={(e) => setUser(e.target.value)}
      />
      <TextField id="email" label="E-mail:" variant="outlined" defaultValue={emailState } onChange={(e) => setEmail(e.target.value)}/>
      
     
    </Box>
    <Button variant="contained" endIcon={<SendIcon />} onClick={doSomething}>
        Enviar
      </Button>
      
      <p className="read-the-docs">
        Material UI  is cool!!<br></br>
        {userState}<br></br>
        {emailState}<br></br>

      </p>
      <div>
      <Button onClick={handleOpen}>Open modal </Button>
      <MYModal onOpen={open} onClose={handleClose}/>


      <Button onClick={handleOpenModalChart}>Open other modal </Button>
      <div>
      <Modal
        open={openChart}
        onClose={handleCloseModalChart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            My Chart
          </Typography>


          <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
         
        </Box>
      </Modal>
      </div>



    </div>
  


    </>
  )
}

export default App
