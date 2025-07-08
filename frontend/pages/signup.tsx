import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
        }),
      });

      if (res.ok) {
        alert('Inscription réussie !');
        router.push('/signin');
      } else {
        const data = await res.json();
        alert(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
      alert('Erreur serveur, veuillez réessayer plus tard.');
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Inscription</h1>
      <form onSubmit={handleSignup}>
        {[
          { name: 'firstName', placeholder: 'Prénom', type: 'text' },
          { name: 'lastName', placeholder: 'Nom', type: 'text' },
          { name: 'email', placeholder: 'Email', type: 'email' },
          { name: 'password', placeholder: 'Mot de passe', type: 'password' },
          { name: 'confirmPassword', placeholder: 'Confirmer le mot de passe', type: 'password' },
          { name: 'phoneNumber', placeholder: 'Numéro de téléphone', type: 'text' }
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
          S'inscrire
        </button>
      </form>
    </div>
    </div>
  );
}