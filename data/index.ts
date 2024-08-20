export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Proficient in RESTful APIs ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Expert in Modern Authorization",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Skilled in CI/CD Processes.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "./grid.svg",
      spareImg: "./b4.svg",
    },
  
    {
      id: 5,
      title: "Familiar with Git Versioning",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "./b5.svg",
      spareImg: "./grid.svg",
    },
    {
      id: 6,
      title: "Eager to Join Your Team",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Full-Stack Blog Application with React and Node.js",
      des: " Developed a feature-rich blog platform using React for the front-end and Node.js for the back-end, integrated with PostgreSQL for database management. The application supports user authentication, secure login, and full CRUD operations for blog posts, allowing users to create, update, and manage their content seamlessly. API integration ensures efficient communication between the front and back ends, delivering a smooth user experience.",
      img: "./test.png",
      iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./fm.svg"],
      link: "https://jessieblogs-h5cqa6h3hmgpfhf8.australiaeast-01.azurewebsites.net/#/login",
      gitlink:"https://github.com/jessie09Z/Jessie-s-Blog-Project"
    },
    {
      id: 2,
      title: "Comprehensive E-commerce Platform with ASP.NET Core",
      des: "Developed a robust e-commerce website using ASP.NET Core (v8) with features such as CRUD operations for products and categories, shopping cart functionality, and order management. Leveraged Razor Pages, N-Tier architecture, and the Repository Pattern for scalable, maintainable code. Integrated .NET Core Identity for user authentication and authorization, and deployed the solution on Microsoft Azure",
      img: "./bulky.png",
      iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./stream.svg", "./c.svg"],
      link: "https://bulkyweb20240814122853.azurewebsites.net/",
      gitlink:"https://github.com/jessie09Z/BulkyWeb_Jessie"
    },
    {
      id: 3,
      title: "Jessie's Personal Portfolio",
      des: "A personal portfolio website built with Next.js and Tailwind CSS, featuring a sleek design and responsive layout. Utilizes Aceternity UI for a modern user interface and TypeScript for type safety and enhanced development efficiency.",
      img: "./jessieLinkedin.png",
      iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./c.svg"],
      link: "https://jessie09z.github.io/JessiePortfolio/",
      gitlink:"https://github.com/jessie09Z/Jessie-s-portfolio"
    },
    {
      id: 4,
      title: "Scalable E-Commerce Microservices Application",
      des: " A comprehensive project in progress aimed at building, deploying, and scaling an E-Commerce application using a microservices architecture. The front-end is developed with React and Next.js, while the back-end services are powered by Node.js and Express, with data stored in MongoDB and Redis. The entire application is containerized with Docker and orchestrated in a Kubernetes cluster. The project leverages TypeScript for type safety across the stack, providing a robust and scalable solution.",
      img: "./p4.svg",
      iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg", "./gsap.svg"],
      link: "./",
      gitlink:"https://github.com/jessie09Z/Jessie-s-portfolio"

    },
  ];
  
 
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "./cloud.svg",
      nameImg: "./cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "./app.svg",
      nameImg: "./appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "./host.svg",
      nameImg: "./hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "./s.svg",
      nameImg: "./streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "./dock.svg",
      nameImg: "./dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer",
      desc: "Designed and deployed a web page utilizing Next.js for server-side rendering, Node.js for backend logic, and MongoDB for database management, ensuring a robust and efficient user experience.",
      className: "md:col-span-2",
      thumbnail: "./exp1.svg",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./exp2.svg",
    },
   
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "./git.svg",
      link:"https://github.com/jessie09Z"
    },
  
    {
      id: 2,
      img: "./link.svg",
      link:"https://www.linkedin.com/in/jessie-zhang-a724392aa/"
    },
  ];