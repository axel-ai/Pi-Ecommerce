import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import newsletterImg from '../../../Assets/Images/Admin/newsletter.png';
import usersImg from '../../../Assets/Images/Admin/users.jpeg';
import productsImg from '../../../Assets/Images/Admin/products.jpeg';
import discountImg from '../../../Assets/Images/Admin/discounts.jpeg';
import sellImg from '../../../Assets/Images/Admin/sells.jpeg';

import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="adminDashboard__container">
      <Container>
        <h2> Bienvenido de nuevo, Admin!</h2>
        <div className="adminHome__cards__container pt-4">
          <Card style={{ width: '18rem' }} className="adminHome__card">
            <Card.Img
              variant="top"
              src={usersImg}
              className="adminHome__card__img"
            />
            <Card.Body className="adminHome__card__body">
              <Card.Title>Usuarios</Card.Title>
              <Card.Text>Visualizar, activar ó desactivar usuarios. </Card.Text>
              <Button as={Link} to="/adminusers" variant="secondary">
                Ingresar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="adminHome__card">
            <Card.Img
              variant="top"
              src={productsImg}
              className="adminHome__card__img"
            />
            <Card.Body className="adminHome__card__body">
              <Card.Title>Productos</Card.Title>
              <Card.Text>Visualizar, editar, crear productos.</Card.Text>
              <Button as={Link} to="/adminproducts" variant="secondary">
                Ingresar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="adminHome__card">
            <Card.Img
              variant="top"
              src={discountImg}
              className="adminHome__card__img"
            />
            <Card.Body className="adminHome__card__body">
              <Card.Title>Descuentos</Card.Title>
              <Card.Text>Gestionar cupones de descuento activos.</Card.Text>
              <Button as={Link} to="/admincupon" variant="secondary">
                Ingresar
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="adminHome__card">
            <Card.Img
              variant="top"
              src={sellImg}
              className="adminHome__card__img"
            />
            <Card.Body className="adminHome__card__body">
              <Card.Title>Ventas</Card.Title>
              <Card.Text>Visualizar, ventas y graficos.</Card.Text>
              <Button as={Link} to="/admindashboard" variant="secondary">
                Ingresar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="adminHome__card">
            <Card.Img
              variant="top"
              src={newsletterImg}
              className="adminHome__card__img"
            />
            <Card.Body className="adminHome__card__body">
              <Card.Title>Novedades</Card.Title>
              <Card.Text>Envia novedades a tus clientes.</Card.Text>
              <Button as={Link} to="/adminnewsletter" variant="secondary">
                Ingresar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default AdminDashboard;
