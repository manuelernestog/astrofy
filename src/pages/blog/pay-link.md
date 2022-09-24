---
layout: "../../layouts/BlogPost.astro"
title: "PayLink 2.0 un organizador de métodos de pago gratis y de código abierto + Tutorial"
description: "Si utilizas varios métodos de pago y necesitas una forma de agruparlos y compartirlos, te presento la versión 2.0 de PayLink..."
pubDate: "Sep 22 2022"
heroImage: "https://pbs.twimg.com/media/Fc49GEdXkAM9-yE?format=jpg&name=large"
---

Si utilizas varios métodos de pago y necesitas una forma de agruparlos y compartirlos, te presento la versión 2.0 de PayLink, un organizador de métodos de pago hecho en Cuba , gratuito, de código abierto y selfHost. Aquí te cuento los detalles y como puedes montar el tuyo.

Hace 2 días [@dlcastillop](https://twitter.com/dlcastillop) nos presentaba PayLink, una alternativa Open SOurce a [@paynestapp](https://twitter.com/paynestapp) un organizador de pagos creado por [@noakmilo](https://twitter.com/noakmilo) y Carlos Lugones que enamoró a la comunidad, pero que lamentablemente cerraba sus puertas.

Cuando ví la publicación de Daniel me puse al tanto del proyecto y en unas horas hice y compartí mi primera contribución al proyecto. Tuvimos muchísimos feedbacks positivos y ese mismo día se unieron más usuarios interesados en contribuir con el proyecto tanto con ideas, trabajo e incluso donaciones.

El crack de [@Swordfest](https://twitter.com/swordfest) nos contactó y nos hizo llegar estos diseños que nos dejaron a todos con la boca abierta. Aquí tiene un link donde pueden ver un #livePreview interactivo del diseño.

https://www.figma.com/proto/9jgwDuwgW4GaO2D1lNwHlJ/Paylink-Contribution?node-id=1%3A4&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A4


![Screenshot from 2022-09-17 19-14-51.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663456497166/a_kjiejLG.png)


[@yossthedev](https://twitter.com/yossthedev) desarrolló un mecanismo para que la página se generara a partir de un fichero de configuración, permitiendo así que cualquiera pueda utilizar esta solución sin necesidad de saber programación. 

![](https://pbs.twimg.com/media/Fc49JYDXEAgSH4S.jpg)

[@CarlosZBent](https://twitter.com/CarlosZBent) también nos ayudó con la experiencia de usuario e implementó el mecanismo para darle feedback al usuario.

![](https://pbs.twimg.com/media/Fc49KTeWYAARIAK.png)

Finalmente, terminamos creando un grupo en Telegram y estuvimos trabajando continuamente como un equipo los últimos 3 días y entre todos esto fue lo que logramos 

- Un organizador de pagos 100% funcional 
- 16 redes sociales pre-configuradas 
- Métodos de pagos personalizables (Puedes poner el que tú quieras) 
- Configuración mediante un fichero. 
- 4 temas visuales. 
- Mecanismo para adicionar nuevos temas. 
- Diseño Adaptativo

Si quieres ver un ejemplo en vivo, de como quedó aquí te dejo [el mío](https://manuelernestog.github.io/paylink)

Ahora para montar tu propio PayLink voy a dividirlo en dos, una explicación corta para los desarrolladores y otra paso a paso para los demás.

### Para los dev: 

Pueden hacer un fork [del repositorio](https://github.com/dlcastillop/paylink) y solo hay que cambiar el `paylink.config.json`. La app está hecha con [@vite\_js](https://twitter.com/vite_js) así que para hacer el deploy se pueden guiar por la documentación según la plataforma donde decidan hacerlo.

### Para los no dev

Primeramente, vamos a bajar la web, tan solo tenemos que entrar a [esta página](https://github.com/dlcastillop/paylink) donde se encuentra el código y damos dónde dice Code y luego Download Zip.

![](https://pbs.twimg.com/media/Fc49MBYXwAEcqBH.jpg)

Una vez bajado el fichero, lo descomprimimos, ahí vamos a entrar en la carpeta `src` y abrir el fichero que se llama `paylink.config.json`.

En este fichero vamos a poner nuestros datos según queramos, ahí es donde podemos cambiar el tema de la app, el nombre y los métodos de pago. Tan solo tenemos que poner el nuestro.

![](https://pbs.twimg.com/media/Fc49NB6XoAMyT_Y.jpg)

En la parte que dice "hero" es para nuestra foto, ahí vamos a copiar nuestra foto y la vamos a pegar en la carpeta de que dice "public/images" y luego vamos a poner el nombre del fichero en el campo "hero" del fichero de configuración.

![](https://pbs.twimg.com/media/Fc49N7MXgAIpl0u.jpg)

![](https://pbs.twimg.com/media/Fc49N8dWQAA6tb8.jpg)

Para los temas por ahora tenemos 4: 

- swordfish-dark-theme 
- swordfish-theme 
- minimalis-dark-theme 
- minimalist-theme


![Screenshot from 2022-09-17 19-20-52.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663456862431/ZZaENG25k.png)

Aqui solo tenemos que poner el nombre del que más nos guste

Ya una vez hecho esto terminamos el proceso de configuración, guardamos el fichero y lo cerramos. Vamos a tras y volvemos a comprimir la carpeta pero ahora con nuestros cambios.

Ahora solo nos queda publicarlo en internet. Para esto vamos a utilizar [http://netlify.com](http://netlify.com/) (si estás desde cuba necesitas encender la VPN para poder acceder).

Aquí sencillamente nos creamos una cuenta y nos autenticamos. Luego vamos a la opción que dice Add New Site y le damos Deply Manually. En este paso subimos el fichero que comprimidos con anterioridad con nuestra página y esto debe crear nuestra página web.

![](https://pbs.twimg.com/media/Fc49QREXEAk015E.jpg)

Ahora por último vamos a "Site Settings" y ahí pinchamos "change site name" para cambiar el nombre por el que queramos. Y listo, ya tienes tu PayLink totalmente gratis y en línea.

No me quiero despedir sin darle las gracias, especialmente a [@dlcastillop](https://twitter.com/dlcastillop) por la iniciativa y por su trabajo. Si te gustó PayLink asegúrate de seguirlo para que no te pierdas nada. 

También a [@Swordfest](https://twitter.com/Swordfest), [@CarlosZBent](https://twitter.com/CarlosZBent), y [@yossthedev](https://twitter.com/yossthedev), fue un gustazo trabajar con ellos en este proyecto estos días.

Espero que esta solución te sea de provecho y le puedas sacar partido. Nos vemos en la próxima :)