import React from 'react';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import ItemPrimary from './components/item-primary/ItemPrimary';
import ItemSecondary from './components/item-secondary/ItemSecondary';
import ContactForm from './components/contact-form/ContactForm';
import './App.css';
import 'bulma/css/bulma.min.css';
function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <ItemPrimary />
      <ItemSecondary />
      <ContactForm />
    </div>
  );
}
export default App;