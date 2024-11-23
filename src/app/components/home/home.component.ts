// home.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.animate-up', [
          style({ transform: 'translateY(40px)', opacity: 0 }),
          stagger(200, [
            animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ transform: 'translateY(0)', opacity: 1 }))
          ])
        ])
      ])
    ]),
    trigger('parallax', [
      state('move', style({
        transform: '{{transform}}'
      }), { params: { transform: 'translate3d(0, 0, 0)' }}),
    ])
  ]
})
export class HomeComponent implements OnInit {
  mouseX = 0;
  mouseY = 0;
  parallaxItems: any[] = [];
  scrollProgress = 0;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth - 0.5) * 20;
    this.mouseY = (event.clientY / window.innerHeight - 0.5) * 20;
    this.updateParallax();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
  }

  updateParallax() {
    this.parallaxItems = [
      { transform: `translate3d(${this.mouseX * 0.3}px, ${this.mouseY * 0.3}px, 0)` },
      { transform: `translate3d(${this.mouseX * 0.5}px, ${this.mouseY * 0.5}px, 0)` },
      { transform: `translate3d(${this.mouseX * 0.7}px, ${this.mouseY * 0.7}px, 0)` }
    ];
  }

  techStack = [
    { icon: 'fab fa-angular', name: 'Angular' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-python', name: 'Python' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.updateParallax();
  }
}