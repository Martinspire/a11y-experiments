import { Route } from '@angular/router';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
import { Team3Component } from './team3/team3.component';
import { Team4Component } from './team4/team4.component';
import { Team5Component } from './team5/team5.component';
import { Team6Component } from './team6/team6.component';
import { Team7Component } from './team7/team7.component';
import { Team8Component } from './team8/team8.component';
import { Team9Component } from './team9/team9.component';
import { TeamsComponent } from './teams.component';

export const teamsRoutes: Route[] = [
  {
    path: '',
    component: TeamsComponent,
  },
  {
    path: 'team1',
    component: Team1Component,
    data: {
      title: 'Team 1',
      breadcrumb: 'team 1',
    },
  },
  {
    path: 'team2',
    component: Team2Component,
    data: {
      title: 'Team 2',
      breadcrumb: 'team 2',
    },
  },
  {
    path: 'team3',
    component: Team3Component,
    data: {
      title: 'Team 3',
      breadcrumb: 'team 3',
    },
  },
  {
    path: 'team4',
    component: Team4Component,
    data: {
      title: 'Team 4',
      breadcrumb: 'team 4',
    },
  },
  {
    path: 'team5',
    component: Team5Component,
    data: {
      title: 'Team 5',
      breadcrumb: 'team 5',
    },
  },
  {
    path: 'team6',
    component: Team6Component,
    data: {
      title: 'Team 6',
      breadcrumb: 'team 6',
    },
  },
  {
    path: 'team7',
    component: Team7Component,
    data: {
      title: 'Team 7',
      breadcrumb: 'team 7',
    },
  },
  {
    path: 'team8',
    component: Team8Component,
    data: {
      title: 'Team 8',
      breadcrumb: 'team 8',
    },
  },
  {
    path: 'team9',
    component: Team9Component,
    data: {
      title: 'Team 9',
      breadcrumb: 'team 9',
    },
  },
];
