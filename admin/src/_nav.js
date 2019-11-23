export default {
  items: [
    {
      name: 'Institutes',
      url: '/universities',
      icon: 'fa fa-university',
      children: [
        {
          name: 'Universities',
          url: '/universities',
          icon: '',
        },
        {
          name: 'Colleges',
          url: '/colleges',
          icon: '',
        },
        {
          name: 'Schools',
          url: '/schools',
          icon: '',
        },
      ],
    }, 
    {
      name: 'Student Paths',
      url: '/degrees',
      icon: 'fa fa-graduation-cap',
      children: [
        {
          name: 'Degrees',
          url: '/degrees',
          icon: '',
        },
        {
          name: 'Fields',
          url: '/fields',
          icon: '',
        }
      ],
    }, 
    {
      name: 'Subjects',
      url: '/subjects',
      icon: 'fa fa-book'
    },
    {
      name: 'Careers',
      url: '/careers',
      icon: 'fa fa-university'
    },
    {
      name: "Admin Users",
      url: "/admins",
      icon: "fa fa-users",
      badge: {
        variant: "info"
      }
    },
    {
      name: 'Student Assessment',
      url: '/questions',
      icon: 'fa fa-graduation-cap',
      children: [
        {
          name: 'Questions',
          url: '/questions',
          icon: '',
        }
      ],
    }
  ]
};
