// Define public routes accessible to all users

const PublicRoute = [
  // {
  //   path: 'login',
  //   element: <Login />,
  // },
  {
    path: 'service',
    children: [
      {
        path: 'log',
        element: <div>Blog</div>,
      },
    ],
  },
  {
    path: 'about-us',
    element: <div>About Us</div>,
  },
];

export default PublicRoute;
