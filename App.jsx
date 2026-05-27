import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Form from './components/Form';
import './App.css';

const sampleCards = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: 'A full-stack shopping platform with cart, payments, and admin panel.',
    tag: 'Full Stack',
    techStack: ['React', 'Node.js', 'MongoDB'],
    links: { demo: '#', github: '#' },
    featured: true,
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Drag-and-drop Kanban board with real-time state updates.',
    tag: 'Frontend',
    techStack: ['React', 'CSS3'],
    links: { demo: '#', github: '#' },
  },
  {
    id: 3,
    title: 'Blog API',
    description: 'RESTful API with auth, CRUD operations, and pagination.',
    tag: 'Backend',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    links: { github: '#' },
  },
];

export default function App() {
  const [loadingBtn, setLoadingBtn] = useState(false);

  const simulateLoad = () => {
    setLoadingBtn(true);
    setTimeout(() => setLoadingBtn(false), 2000);
  };

  return (
    <div className="app">
      {/* ── Component 1: Header ── */}
      <Header
        logo="ReactComp"
        navLinks={[
          { label: 'Header', href: '#header-demo' },
          { label: 'Cards', href: '#card-demo' },
          { label: 'Buttons', href: '#button-demo' },
          { label: 'Form', href: '#form-demo' },
        ]}
      />

      <main className="main">
        <div className="page-title">
          <p className="page-tag">REACT</p>
          <h1>React Component Library</h1>
          <p className="page-sub">5 reusable components with props &amp; state — Header, Footer, Card, Button, Form</p>
        </div>

        {/* ── Component 3: Card ── */}
        <section id="card-demo" className="demo-section">
          <h2 className="demo-label">Card Component</h2>
          <div className="cards-grid">
            {sampleCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </section>

        {/* ── Component 4: Button ── */}
        <section id="button-demo" className="demo-section">
          <h2 className="demo-label">Button Component</h2>
          <div className="button-grid">
            <div className="button-row">
              <span className="btn-group-label">Variants</span>
              <Button label="Primary" variant="primary" />
              <Button label="Outline" variant="outline" />
              <Button label="Ghost" variant="ghost" />
              <Button label="Danger" variant="danger" />
            </div>
            <div className="button-row">
              <span className="btn-group-label">Sizes</span>
              <Button label="Small" size="sm" />
              <Button label="Medium" size="md" />
              <Button label="Large" size="lg" />
            </div>
            <div className="button-row">
              <span className="btn-group-label">States</span>
              <Button label="Disabled" disabled />
              <Button label="Loading..." loading={loadingBtn} onClick={simulateLoad} />
              <Button label="With Icon" icon="🚀" iconRight="→" onClick={() => alert('Launched!')} />
            </div>
          </div>
        </section>

        {/* ── Component 5: Form ── */}
        <section id="form-demo" className="demo-section">
          <h2 className="demo-label">Form Component</h2>
          <Form
            title="Send a Message"
            onSubmit={(data) => {
              console.log('Form data:', data);
              alert(`Thanks ${data.name}! Message received.`);
            }}
          />
        </section>
      </main>

      {/* ── Component 2: Footer ── */}
      <Footer
        logo="ReactComp"
        tagline="5 reusable React components — Assignment 2"
        links={[
          { label: 'Header', href: '#' },
          { label: 'Cards', href: '#card-demo' },
          { label: 'Buttons', href: '#button-demo' },
          { label: 'Form', href: '#form-demo' },
        ]}
      />
    </div>
  );
}
