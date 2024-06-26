import { Injectable } from '@angular/core';
import { Project } from './project/project.model';

@Injectable({
  providedIn: 'root'
})
// https://drive.google.com/file/d/1NgL_RpbuDEcW5Fimhmkj3U-BGHF0sAAb/view
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'p1',
      name: 'UniJet',
      type: 'Senior Capstone Project for Louisiana Tech University',
      photosPath: 'unijet',
      summary: 'Campus carpooling application to allow students to request and accept rides to reduce parking on campus.',
      skills: 'Reactjs, Expressjs, PostgreSQL, Typescript, Node.js',
      fullSummary: ['Campus carpooling application to allow students to request and accept rides to reduce parking on campus.',
      '▪ Developed flexible backend that allowed developers to connect the frontend to the database via Express.js for 3 months.',
      '▪ Created logic that allowed passengers to request rides, drivers to accept passenger\'s requests, and show the user the current route on the React frontend.',
      '▪ Modeled and programmed a database using PostgreSQL for the server side to allow developers to make requests to the database to get or store information via Express.js.',
      '▪ Developed interactive front-end pages using React for the user to see various information, such as what users are looking for rides to campus.'],
      links: [['Archieved Video', 'https://www.youtube.com/watch?v=_MSd2vCZSHE']],
      startDate: 'Dec. 2023',
      endDate: 'May 2024'
    },
    {
      id: 'p2',
      name: 'Software Design and Engineering',
      type: 'Louisiana Tech University Class',
      photosPath: 'latech',
      summary: 'Worked with a team using Agile development to fix a game given to us and develop new features for multiple sprints.',
      skills: 'GitHub, git, Agile, Scrum',
      fullSummary: ['▪ Worked with a team using Agile development to fix a game given to us and develop new features for multiple sprints.',
      '▪ Maintained game using C# with the Windows Forms library for multiple sprints.'],
      links: [],
      startDate: 'Sep. 2023',
      endDate: 'Nov. 2023'
    },
    {
      id: 'p3',
      name: 'Introduction to Cyber Security',
      type: 'Louisiana Tech University Class',
      photosPath: 'latech',
      summary: 'Collaborated with a team to complete several challenges that involved cryptography, reverse engineering, and steganography.',
      skills: 'Encryption, security, steganography, reverse engineering, cryptography',
      fullSummary: ['▪ Collaborated with a team to complete several challenges that involved cryptography, reverse engineering, and steganography.',
      '▪ Programmed scripts to encrypt/decrypt files using different methods such as steganography, xor, and vigenere.'],
      links: [],
      startDate: 'Sep. 2022',
      endDate: 'Nov. 2022'
    },
    {
      id: 'p4',
      name: 'SATHE',
      type: 'Engineering Design and Development Project at Saint Paul\'s Catholic High School',
      photosPath: 'stpauls',
      summary: 'Created a device that attaches to helmets to check their blind spots and notify the user of any objects seen',
      skills: 'Python, tkinter, gui, sensors, Raspberry Pi',
      fullSummary: ['▪ Created a device that attaches to helmets to check their blind spots and notify the user of any objects seen',
      '▪ Made 3D model to hold raspberry py, sonar sensors, and wiring',
      '▪ Programmed a UI to display to the user if anything was picked up by a sensor'],
      links: [],
      startDate: 'Dec. 2019',
      endDate: 'May. 2020'
    },
    {
      id: 'p5',
      name: 'Reverse Engineering',
      type: 'Louisiana Tech University Class',
      photosPath: 'latech',
      summary: 'Learned the basic principles to reverse engineering, how to "break open" programs, as well as techniques to protect programs.',
      skills: 'Assembly, C, Cutter, Ghidra, Obfuscation, Virus Analysis, Vulnerabily Analysis',
      fullSummary: ['▪ Learned the basic principles to reverse engineering, how to "break open" programs, as well as techniques to protect programs.',
      '▪ Made a text based adventure game with a team with both protections and vulnerabilies for other students to solve at the Cyberstorm'],
      links: [],
      startDate: 'Dec. 2019',
      endDate: 'May 2020'
    },
    {
      id: 'p6',
      name: 'Game Design',
      type: 'Louisiana Tech University Class',
      photosPath: 'latech',
      summary: 'Learned the basics to game design, how to use Unity to make games, and participlated in an on campus game jam.',
      skills: 'Unity, C#, Figma',
      fullSummary: ['▪ Learned the basics to game design, how to use Unity to make games, and participlated in an on campus game jam.',
      '▪ Worked with 3 different teams to create a Pinball Game, VR Escape Room, 2D Puzzle Platformer, and a 2D Topdown Rougelike',
      '▪ Learned the basics to Unity shaders, such as ShaderGraphs and ShaderLab'],
      links: [['Blade Diver (Project 3)', 'https://drive.google.com/file/d/1T0Ff6t1wD9CELkHV3XKTkgdQ4rpzcR3R/view?usp=sharing'],
      ['GameJam Game', 'https://itch.io/jam/8th-annual-louisiana-tech-university-game-jam/rate/2645882']],
      startDate: 'Mar. 2024',
      endDate: 'May 2024'
    },
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById (id: string): Project
  {
    const emptyProject: Project = {
      id: 'N/A',
      name: 'N/A',
      type: 'N/A',
      photosPath: '',
      summary: '',
      skills: '',
      fullSummary: [],
      links: [],
      startDate: '',
      endDate: ''
    }
    console.log(id);
    const foundProject = this.projects.find((project) => project.id === id);

    if (foundProject)
    {
      return foundProject;
    }
    else
    {
      return emptyProject;
    }

    // return this.projects.find((project) => project.id === id);
  }
}
