
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Btn from './components/Btn';


function App() {
  return (
    <div>
      <Header titulo= 'Galería de Imágenes con React'/>   
      <Card
       titulo='Misifú'
       img= 'https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
       descripcion= 'Lindo Gato'
       />
       <Card
       titulo='Diego'
       img= 'https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359_1280.jpg'
       descripcion= 'El Relajado'
       />   
       <Card
       titulo='Don Cucho'
       img= 'https://cdn.pixabay.com/photo/2014/10/01/16/36/siamese-468814_1280.jpg'
       descripcion= 'El Pensador'
       />   
       <Card
       titulo='Minungo'
       img= 'https://cdn.pixabay.com/photo/2021/01/24/20/47/tabby-5946499_1280.jpg'
       descripcion= 'El Estratéjico'
       />   
       <Card
       titulo='Silvestre'
       img= 'https://cdn.pixabay.com/photo/2019/02/02/18/03/cat-3971068_1280.jpg'
       descripcion= 'El Dormilón'
       />   
       <Card
       titulo='Cunino'
       img= 'https://cdn.pixabay.com/photo/2015/11/23/07/31/scottish-fold-1057829_1280.jpg'
       descripcion= 'El Observador'
       />
      <Btn
      titulo='Ver Más'
      />
      <Footer 
      text='Galeria de Gatos' 
      />      
    </div>
  );
}

export default App;
