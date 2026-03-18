import { Component, OnInit } from '@angular/core';

interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
}

interface SkillGroup {
  heading: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkMode = true;
  isAnimating = false;
  name = 'Den Amiel Leonardo';
  role = 'Senior Software Engineer';
  phone = '+63 916 730 9212';
  email = 'denamielleonardo199726@gmail.com';
  linkedin = 'linkedin.com/in/denamielleonardo';
  linkedinUrl = 'https://linkedin.com/in/denamielleonardo';
  profileImage = 'assets/imgs/me.jpg';

  about: string[] = [
    `I'm a Senior Software Developer based in the Philippines with 8+ years of experience
     building robust, scalable applications. I specialize in creating high-performance mobile
     and web solutions using modern frameworks like Angular, Ionic, Flutter, and React Native.`,
    `Throughout my career, I've worked with leading companies including Cario, Ahsay Operation
     Centre Limited, Eclectus Technologies Inc., and Wireless Link Technologies. I'm passionate
     about developing applications that solve real business problems in logistics, agriculture,
     and enterprise sectors.`,
    `I hold a Bachelor of Science in Information Technology from the University of the East.
     When I'm not coding, I enjoy exploring new technologies and staying current with industry trends.`
  ];

  experiences: Experience[] = [
    {
      period: 'March 2020 - Present',
      title: 'Full Stack Developer',
      company: 'Cario',
      location: 'Australia',
      summary: 'Lead the development of a mobile application for logistics management, resulting in a 30% increase in operational efficiency.'
    },
    {
      period: 'Aug 2023 — Feb 2025',
      title: 'Mobile Application Developer',
      company: 'Ahsay Operation Centre Limited',
      location: 'Makati City',
      summary: 'Designed, built and maintained high performance, reusable reliable code including UI and core functionality. Explored and worked on hybrid applications as needed.'
    },
    {
      period: 'Dec 2018 — Aug 2023',
      title: 'Senior Software Developer',
      company: 'Eclectus Technologies Inc.',
      location: 'Taguig City',
      summary: 'Conceptualized, designed, developed and improved/maintained in-house applications. Acted as project lead driving requirements gathering, design and deployment. Explored and worked on hybrid applications.'
    },
    {
      period: 'June 2017 — Oct 2018',
      title: 'Junior Software Developer',
      company: 'Wireless Link Technologies Inc.',
      location: 'Manila City',
      summary: 'Implemented new services in applications as needed. Designed, built and maintained high performance reusable code. Explored and worked on hybrid applications.'
    }
  ];

  skillGroups: SkillGroup[] = [
    {
      heading: 'Frontend Frameworks',
      items: ['Angular', 'Vue.js', 'React JS']
    },
    {
      heading: 'Backend & Databases',
      items: ['C#', '.NET Core', 'SQL', 'SQLite', 'Firebase']
    },
    {
      heading: 'Design & Styling',
      items: ['Figma', 'HTML5', 'CSS/SCSS', 'Grid/Flexbox', 'Mobile First Development']
    },
    {
      heading: 'Mobile App Development',
      items: ['Ionic Framework', 'Flutter', 'React Native']
    },
    {
      heading: 'Tools & Methodologies',
      items: ['TypeScript', 'Vite', 'GIT', 'Jira', 'Agile', 'Unit Testing (Jasmine/Karma)']
    }
  ];

  projects: Project[] = [
    {
      title: 'Cario Fleet Management System',
      description: 'Enterprise fleet management solution with real-time tracking and analytics dashboard.',
      tags: ['Angular', 'Azure Maps', '.NET Core']
    },
    {
      title: 'Cario Connect App',
      description: 'Cross-platform mobile app available on Google Play Store & App Store for fleet operations and management.',
      tags: ['Flutter', 'Bloc', '.NET Core', 'Azure Maps', 'SQLite', 'Firebase'],
      link: 'https://apps.apple.com/au/app/carioconnect-v2/id6746742162'
    },
    {
      title: 'Kinboy App',
      description: 'High-performance mobile application with real-time data synchronization across platforms.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'SQLite', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.kintips.goldminer&hl=fil'
    },
    {
      title: 'Eclectus Farms System',
      description: 'Delivery management application for logistics operations and order fulfillment.',
      tags: ['Angular', 'TypeScript', 'Firebase', 'SignalR']
    },
    {
      title: 'Larga Delivery App',
      description: 'Delivery management application for logistics operations and order fulfillment.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.eclectustechnologiesinc.largaproduction&hl=en'
    },
    {
      title: 'Eclectus Farms Warehouse Management App',
      description: 'Warehouse management application for agricultural supply chain operations.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.eclectustechnologiesinc.warehousemanagementproduction&hl=en'
    },
    {
      title: 'DFDelivers Order Fulfillment App',
      description: 'Delivery management application for logistics operations and order fulfillment.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'Firebase']
    },
    {
      title: 'Eclectus Farms Farmers App',
      description: 'Mobile application for farmer field operations and data collection.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.eclectustechnologiesinc.eclectusfarmsfarmersmobile'
    },
    {
      title: 'Eclectus Farms FieldQC App',
      description: 'Field quality control application for agricultural produce inspection.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.eclectustechnologiesinc.eclectusfarmsfieldqcmobile&hl=en'
    },
    {
      title: 'Eclectus Farms Store App',
      description: 'Store management application for farm produce retailing.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.eclectustechnologiesinc.eclectusfarmstoremobile'
    },
    {
      title: 'WLT Fleet Management System',
      description: 'Enterprise fleet management web system for vehicle tracking and operations.',
      tags: ['Angular', 'TypeScript', '.NET Core']
    },
    {
      title: 'WLT Fleet Management Application',
      description: 'Mobile fleet management application for field operations and driver management.',
      tags: ['Angular', 'Ionic Framework', 'TypeScript', 'Firebase']
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  openLink(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }
  
  toggleTheme(event: MouseEvent) {
    if (this.isAnimating) return;

    // Position the wipe origin at the click point
    const overlay = document.querySelector('.theme-overlay') as HTMLElement;
    const x = event.clientX;
    const y = event.clientY;
    overlay.style.left = `${x}px`;
    overlay.style.top = `${y}px`;
    overlay.style.width = '10px';
    overlay.style.height = '10px';
    overlay.style.marginLeft = '-5px';
    overlay.style.marginTop = '-5px';

    this.isAnimating = true;

    // Switch theme at the midpoint of the animation
    setTimeout(() => {
        this.isDarkMode = !this.isDarkMode;
        document.documentElement.setAttribute(
            'data-theme',
            this.isDarkMode ? 'dark' : 'light'
        );
    }, 200);

    // Clean up after animation completes
    setTimeout(() => {
        this.isAnimating = false;
    }, 650);
  }
}