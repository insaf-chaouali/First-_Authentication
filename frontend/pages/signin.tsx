import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';
import Link from 'next/link'; 


export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/auth/login', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (res.ok) {
        alert('Connexion réussie !');
        router.push('/Home');
      } else {
        const data = await res.json();
        alert(data.message || "Erreur lors de la connexion");
      }
    } catch (error) {
      console.error('Erreur lors de connexion', error);
      alert('Erreur serveur, veuillez réessayer plus tard.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Connexion</h1>
        <form onSubmit={handleSignin}>
          {[
            { name: 'email', placeholder: 'Email', type: 'email' },
            { name: 'password', placeholder: 'Mot de passe', type: 'password' },
          ].map((field) => (
            <div key={field.name} className={styles.formGroup}>
              <label className={styles.label} htmlFor={field.name}>
                {field.placeholder}
              </label>
              <input
                className={styles.inputField}
                id={field.name}
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button type="submit" className={styles.submitButton}>
            Connexion
          </button>
          <p className={styles.redirectText}>
            Vous n’avez pas de compte ?{' '}
            <Link href="/signup" className={styles.link}>
              Inscrivez-vous ici
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}
