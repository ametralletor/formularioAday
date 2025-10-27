import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import './App.css'

function App() {
   const [datos, setData] = useState({name:'', surname:'', age:'', gender:'', lenguajepro:'', rating:0, terminos:false})
const handleSubmit = (e) => {
  e.preventDefault(); 
  setOpen(true);      
  console.log(datos);
};

 const [open, setOpen] = React.useState(false);
 const handleChangeName = (e) =>{
 setData({
 ...datos,
 name: e.target.value
 })
 }
  const handleChangeSurname = (e) =>{
 setData({
 ...datos,
 surname: e.target.value
 })
 }
   const handleChangeAge = (e) =>{
 setData({
 ...datos,
 age: e.target.value
 })
 }
 const handleChangeGender = (e) =>{
 setData({
 ...datos,
 gender: e.target.value
 })
 }
  const handleChangeLanguage = (e) =>{
 setData({
 ...datos,
 lenguajepro: e.target.value
 })
 }
  const handleChangeRating = (e) =>{
 setData({
 ...datos,
 rating: e.target.value
 })
 }
  const handleChangeTerminos = (e) =>{
 setData({
 ...datos,
 terminos: e.target.checked
 })
 }

   const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const limpiar = () => {
  setData({
    name: '',
    surname: '',
    age: '',
    gender: '',
    lenguajepro: '',
    rating: 0,
    terminos: false
  })
}





  return (
    <>
      <div>
        <Box component='form' onSubmit={handleSubmit} sx={{ width: '100%', maxWidth:'100%' }} >
          <Grid container spacing={1}>
            <Grid size={{ xs: 6, sm:5, md:5, lg :5, xl:5 }}>
              <TextField
                required
              label='Nombre'
              variant='outlined'
              fullWidth
              value={datos.name}
              onChange={handleChangeName}
            />
          </Grid>
          <Grid size={{ xs: 6, sm:5, md:5, lg :5, xl:5  }}>
            <TextField
              required
              label='Apellidos'
              variant='outlined'
              fullWidth
              value={datos.surname}
              onChange={handleChangeSurname}
            />
          </Grid>
            <Grid size={{ xs: 12, sm: 2, md:2, lg:2, xl:2  }}>
            <TextField
              required
              label='Edad'
              type='number'
              variant='outlined'
              fullWidth
              value={datos.age}
              onChange={handleChangeAge}
            />
          </Grid> 
          <Grid size={{xs:12, sm:5, md:5, lg:5, xl:5}} sx={{ mt: 1 }}>
            <FormControl>
              <FormLabel>Género</FormLabel>
            <RadioGroup row onChange={handleChangeGender}>
              <FormControlLabel value="Femenino" control={<Radio required/>} label="Femenino" />
              <FormControlLabel value="Masculino" control={<Radio required/>} label="Masculino" />
              <FormControlLabel value="Otro" control={<Radio required/>} label="Otro" />
            </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={{xs:12, sm:7, md:7,lg:7,xl:7}} sx={{ mt: 1 }}>
            <FormControl required fullWidth>
              <InputLabel>Lenguaje de programación favorito</InputLabel>
                <Select onChange={handleChangeLanguage} value={datos.lenguajepro}>
                  <MenuItem value={10}>Java</MenuItem>
                  <MenuItem value={20}>JavaScript</MenuItem>
                  <MenuItem value={30}>Python</MenuItem>
                </Select>
            </FormControl>
          </Grid>
          <Grid size={{xs:12}}>
          <Divider />
          </Grid>
           <Grid size={{xs:12, sm:3, md:3, lg:3, xl:3}} sx={{ mt: 1 }}>
            <Typography component="legend">Puntúa esta encuesta:</Typography>
            <Rating onChange={handleChangeRating} value={datos.rating} />
          </Grid>
          <Grid size={{xs:0, sm:8, md:8, lg:8, xl:8}}>

          </Grid>
          <Grid size={{xs:12, sm:4, md:4, lg:4, xl:4}} >
            <FormControlLabel required control={<Checkbox />} label="He leído los términos y condiciones" value={datos.terminos} onChange={handleChangeTerminos} />
        </Grid>
        <Grid size={{xs:8, sm:8}}></Grid>
        <Grid size={{xs: 6, sm:6}}>
          <Button variant='contained' disabled={!datos.terminos} type='submit' fullWidth>Enviar</Button>
          <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                {"Confirmación"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  ¿Estás seguro de mandar la encuesta?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleClose}>Sí</Button>
              </DialogActions>

          </Dialog>
        </Grid>
        <Grid size={{xs: 6, sm:6}}>
          <Button variant='outlined' fullWidth onClick={limpiar}>Limpiar</Button>
        </Grid>
        </Grid>

      </Box>
      </div>
    </>
  )
}

export default App
