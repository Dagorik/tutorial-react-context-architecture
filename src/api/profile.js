// Pon tus llamadas a las apis, esto solo es un mock
export const getProfile = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          firstName: 'Primer nombre desde el servicio',
          email: 'email@facebook.com',
          photoUrl: 'https://i.stack.imgur.com/l60Hf.png',
        });
      }, 3000);
    });
};


export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 'dagorik') {
        resolve({
          token: 'token de juguete',
        });
      } else {
       reject('Contraseña incorrecta') 
      }
    }, 3000);
  });
};