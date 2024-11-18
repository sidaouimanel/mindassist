import { Component } from '@angular/core';

@Component({
  selector: 'app-relaxation-activity',
  templateUrl: './relaxation-activity.component.html',
  styleUrls: ['./relaxation-activity.component.css']
})
export class RelaxationActivityComponent {
  activities = [
    {
      title: 'Meditation',
      description: 'A practice to calm the mind and reduce stress.',
      link: 'https://www.headspace.com/meditation/techniques',
      imageUrl: '../assets/img/meditation.png'
    },
    {
      title: 'Yoga',
      description: 'Postures to strengthen the body and relax the mind.',
      link: 'https://www.yogajournal.com/poses/types/yoga-for-beginners',
      imageUrl: '../assets/img/yoga.png'
    },
    {
      title: 'Deep Breathing Exercises',
      description: 'Breathing techniques to reduce anxiety and promote relaxation.',
      link: 'https://www.verywellmind.com/breathing-exercises-for-anxiety-2796110',
      imageUrl: '../assets/img/breath.png'
    },
    {
      title: 'Nature Walk',
      description: 'Reconnect with nature to soothe the mind.',
      link: 'https://www.earthday.org/how-a-nature-walk-can-help-your-mental-health/',
      imageUrl: '../assets/img/walk.png',
    },
    {
      title: 'Listen to quran ',
      description: 'Create a soothing ambiance with gentle sounds.',
      link: 'https://www.sleepfoundation.org/how-music-affects-sleep',
      imageUrl: '../assets/img/musique.png'
    },
    {
      title: 'Progressive Muscle Relaxation',
      description: 'A technique to help you relax by tensing and relaxing each muscle group.',
      link: 'https://www.healthline.com/health/progressive-muscle-relaxation',
      imageUrl: '../assets/img/muscle.png'
    }
  ];
  
  dailyActivities = [
    { id: 'meditation', name: 'Meditation', completed: false },
    { id: 'exercise', name: 'Exercise', completed: false },
    { id: 'journaling', name: 'Journaling', completed: false },
    { id: 'hydration', name: 'Stay Hydrated', completed: false },
    { id: 'sleep', name: 'Good Sleep', completed: false }
  ];
}
