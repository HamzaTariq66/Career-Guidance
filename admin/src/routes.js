import React from "react";

const Universities = React.lazy(() => import("./views/Universities/List"));
const UniversityForm = React.lazy(() => import("./views/Universities/Form"));
const Colleges = React.lazy(() => import("./views/Colleges/List"));
const CollegeForm = React.lazy(() => import("./views/Colleges/Form"));
const Schools = React.lazy(() => import("./views/Schools/List"));
const SchoolForm = React.lazy(() => import("./views/Schools/Form"));
const Degrees = React.lazy(() => import("./views/Degrees/List"));
const DegreeForm = React.lazy(() => import("./views/Degrees/Form"));
const Fields = React.lazy(() => import("./views/Fields/List"));
const FieldForm = React.lazy(() => import("./views/Fields/Form"));
const Subjects = React.lazy(() => import("./views/Subjects/List"));
const SubjectForm = React.lazy(() => import("./views/Subjects/Form"));
const Careers = React.lazy(() => import("./views/Careers/List"));
const CareerForm = React.lazy(() => import("./views/Careers/Form"));
const Questions = React.lazy(() => import("./views/Questions/List"));
const QuestionForm = React.lazy(() => import("./views/Questions/Form"));
const Admins = React.lazy(() => import("./views/Admins/Admins"));
const AdminForm = React.lazy(() => import("./views/Admins/Form"));

const routes = [
  {
    path: "/universities",
    exact: true,
    name: "Universities",
    component: Universities
  },
  {
    path: "/universities/:id",
    exact: true,
    name: "University Details",
    component: UniversityForm
  },
  {
    path: "/universities/update/:id",
    exact: true,
    name: "Update University",
    component: UniversityForm
  },
  {
    path: "/colleges",
    exact: true,
    name: "Colleges",
    component: Colleges
  },
  {
    path: "/colleges/:id",
    exact: true,
    name: "College Details",
    component: CollegeForm
  },
  {
    path: "/colleges/update/:id",
    exact: true,
    name: "Update College",
    component: CollegeForm
  },
  {
    path: "/schools",
    exact: true,
    name: "School",
    component: Schools
  },
  {
    path: "/schools/:id",
    exact: true,
    name: "School Details",
    component: SchoolForm
  },
  {
    path: "/schools/update/:id",
    exact: true,
    name: "Update School",
    component: SchoolForm
  },
  {
    path: "/degrees",
    exact: true,
    name: "Degree",
    component: Degrees
  },
  {
    path: "/degrees/:id",
    exact: true,
    name: "Degree Details",
    component: DegreeForm
  },
  {
    path: "/degrees/update/:id",
    exact: true,
    name: "Update Degree",
    component: DegreeForm
  },
  {
    path: "/fields",
    exact: true,
    name: "Field",
    component: Fields
  },
  {
    path: "/fields/:id",
    exact: true,
    name: "Field Details",
    component: FieldForm
  },
  {
    path: "/fields/update/:id",
    exact: true,
    name: "Update Field",
    component: FieldForm
  },
  {
    path: "/subjects",
    exact: true,
    name: "Subject",
    component: Subjects
  },
  {
    path: "/subjects/:id",
    exact: true,
    name: "Subject Details",
    component: SubjectForm
  },
  {
    path: "/subjects/update/:id",
    exact: true,
    name: "Update Subject",
    component: SubjectForm
  },
  {
    path: "/careers",
    exact: true,
    name: "Career",
    component: Careers
  },
  {
    path: "/careers/:id",
    exact: true,
    name: "Career Details",
    component: CareerForm
  },
  {
    path: "/careers/update/:id",
    exact: true,
    name: "Update Career",
    component: CareerForm
  },
  {
    path: "/questions",
    exact: true,
    name: "Question",
    component: Questions
  },
  {
    path: "/questions/:id",
    exact: true,
    name: "Question Details",
    component: QuestionForm
  },
  {
    path: "/questions/update/:id",
    exact: true,
    name: "Update Question",
    component: QuestionForm
  },
  { path: "/admins", exact: true, name: "Admins", component: Admins },
  {
    path: "/admins/sign-up",
    exact: true,
    name: "Add Admin",
    component: AdminForm
  },
  {
    path: "/admins/update/:id",
    exact: true,
    name: "Update Admin",
    component: AdminForm
  }
];

export default routes;
