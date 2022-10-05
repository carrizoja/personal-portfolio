const projects = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/ijac-it-solutions/image/upload/v1664910046/portfolio/ijac_v4dza0.png',
      title: 'iJac IT Solutions',
      github: 'https://github.com/carrizoja/ijac.com.ar',
      demo: 'https://ijac.com.ar'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/ijac-it-solutions/image/upload/v1664910051/portfolio/sweetDesign_per7ao.png',
      title: 'Sweet Design Pastelería',
      github: 'https://github.com/carrizoja/sweetdesign',
      demo: 'https://sweetdesignpasteleria.com.ar'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/ijac-it-solutions/image/upload/v1664910053/portfolio/sweetDesignEcommerce_weipmw.png',
      title: 'Sweet Design eCommerce Javascript',
      github: 'https://github.com/carrizoja/cursoJavascriptCoder',
      demo: 'https://carrizoja.github.io/cursoJavascriptCoder/pages/comprar.html'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/ijac-it-solutions/image/upload/v1664910048/portfolio/reactEcommerce_opyer8.png',
      title: 'iJac eCommerce React Js',
      github: 'https://github.com/carrizoja/cursoReactCoderhouse',
      demo: 'https://optimistic-beaver-a7eebe.netlify.app/'
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/ijac-it-solutions/image/upload/v1664910067/portfolio/backendEcommerce_x1xvnp.png',
      title: 'Backend eCommerce with Node Js / Mongo DB',
      github: 'https://github.com/carrizoja/cursoBackendCoder/tree/main/EntregaFinal',
      demo: 'https://ecommerce-ch-pb.herokuapp.com/'
    }
]

export const getFetchProjects =new Promise ((resolve) => {
    setTimeout(() => {
        resolve(projects)
    },1000)
})