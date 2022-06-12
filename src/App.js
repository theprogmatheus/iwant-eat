// import styles
import './App.css';

// import components
import MyRoutes from './MyRoutes';

const items = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2gpzXwMPctn6H-Akd-HjTzcCHxy9kd-TBw&usqp=CAU",
    title: "Brocado",
    details: "Pão, 2 Hambúrguer 90g, 2 Mussarela, Presunto, Bacon, Alface, Tomate, Molho Tradicional.",
    price: 23.99,
    oldPrice: 31.99
  },
  {
    image: "https://s3.eu-west-3.amazonaws.com/budapestfotoawards/uploads/97472/93-15809-19/full/b4f391e9a6cd9014b2545002ff3e635c.jpg",
    title: "Monstrão Cheddar",
    details: "Pão, 3 Hambúrguer 100g, 3 Cheddars, Bacon, Molho Tradicional.",
    price: 25.99
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRj9EsAvqjxF-HKi8aMaOspy3dCEpFpvXAKA&usqp=CAU",
    title: "Pitoco",
    details: "Pão, Hambúrguer 90g, Cheddar, Bacon, Molho Tradicional.",
    price: 15.49,
    oldPrice: 19.49
  },
  {
    image: "https://img.wallpapic-br.com/i5951-721-45/medium/comida-rapida-hamburger-sanduiche-de-cafe-da-manha-imagem-de-fundo.jpg",
    title: "Fominha",
    details: "Pão, 3 Hambúrguer 120g, 3 Cheddar, 3 Bacon, Molho Tradicional.",
    price: 29.49,
    oldPrice: 34.49
  },
  {
    image: "https://mega.ibxk.com.br/2021/03/29/29164528631360.jpg",
    title: "Coca-Cola",
    details: "LATA 310ml",
    price: 4.99
  }
]

function App() {


  return (<MyRoutes />);
}

export default App;
