
import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'jianghu',
    title: 'Portrayal of Jianghu',
    subtitle: '3D RPG Game | Team Lead & Artist',
    description: [
      'Led team to develop a high-quality 3D RPG with three complete linear levels within a 3-day timeframe.',
      'Independently designed second level in Unity, including gameplay mechanics and character modeling.',
      'Completed full technical implementation (asset creation, scripting, testing).'
    ],
    tags: ['Unity', 'C#', '3ds Max', 'GMTK Game Jam'],
    link: 'https://jianghugroup.itch.io/portayal-of-jianhu',
    image: 'https://picsum.photos/seed/jianghu/800/450',
    type: 'Game'
  },
  {
    id: 'xia-dynasty',
    title: 'The Xia Dynasty',
    subtitle: 'RPG Game | Team Lead & Programmer',
    description: [
      'Developed in UE5, implemented main character controller (walking, jumping, dodge with effects).',
      'Created main menu, game settings, player guidance, and health bar UI elements.',
      'Produced opening animations, cutscenes, and environment showcase animations.'
    ],
    tags: ['Unreal Engine 5', 'Blueprint', 'Character Animation'],
    link: 'https://www.bilibili.com/video/BV1q4wkeGEFL/',
    image: 'https://picsum.photos/seed/xia/800/450',
    type: 'Game'
  },
  {
    id: 'summoning-enigma',
    title: 'Summoning Enigma',
    subtitle: '2D Puzzle Game | Team Lead & Programmer',
    description: [
      'Implemented multiple game features in Unity and merged all project files for final build.',
      'Created summoning system, dialogue system, level transitions, and puzzle mechanics.'
    ],
    tags: ['Unity', 'Ludum Dare 55', 'Puzzle Design'],
    link: 'https://ldjam.com/events/ludum-dare/55/summoning-enigma',
    image: 'https://picsum.photos/seed/enigma/800/450',
    type: 'Game'
  },
  {
    id: 'aigc-mocap',
    title: 'Real-time MoCap & AI Voice',
    subtitle: 'Motion Capture & AIGC Animation',
    description: [
      'Performed character motion capture using XR Animator with motion refinement in Blender.',
      'Combined TTS voice training to build character-specific models for synchronized performance.'
    ],
    tags: ['XR Animator', 'Blender', 'GPT-SoVITS', 'MoCap'],
    link: 'https://www.bilibili.com/video/BV1GxaozyEi6/',
    image: 'https://picsum.photos/seed/aigc1/800/450',
    type: 'AIGC'
  },
  {
    id: 'lip-sync-aigc',
    title: 'AI Lip-Sync Animation',
    subtitle: 'GPT-SoVITS v2 Pro / Blender',
    description: [
      'Generated bilingual voice synthesis and character voice training.',
      'Integrated Blender lip-sync recognition for automatic mouth animation workflow.'
    ],
    tags: ['GPT-SoVITS v2 Pro', 'Blender', 'Lip-Sync'],
    link: 'https://www.bilibili.com/video/BV1m4BUBkEaw/',
    image: 'https://picsum.photos/seed/aigc2/800/450',
    type: 'AIGC'
  },
  {
    id: 'echoes',
    title: 'Echoes',
    subtitle: '3D Animation (Cel-Shading)',
    description: [
      '3-minute 40-second 3D animation created using emerging cel-shading (toon rendering) techniques.',
      'Full production pipeline including modeling, rigging, rendering, and post-production voice-over.',
      '25,600-word English dissertation based on this project.'
    ],
    tags: ['Blender', 'Marvelous Designer', 'Mixamo', 'Cel-shading'],
    link: 'https://www.bilibili.com/video/BV1eZkgYAE8C/',
    image: 'https://picsum.photos/seed/echoes/800/450',
    type: 'Animation'
  },
  {
    id: 'crisis-epoch',
    title: 'Crisis Epoch',
    subtitle: '3D FPS Game',
    description: [
      'Self-developed 3D FPS with immersive environments and engaging mechanics.',
      'Implemented player control, enemy AI, boss behavior, and clue collection mechanics.'
    ],
    tags: ['Unity', 'C#', 'FPS Mechanics'],
    link: 'https://www.bilibili.com/video/BV14zwBemEkG/',
    image: 'https://picsum.photos/seed/crisis/800/450',
    type: 'Game'
  },
  {
    id: 'reimu-ball',
    title: "Reimu's Summoning Ball",
    subtitle: 'Rolling Ball Game',
    description: [
      'Developed in UE4, integrating engaging storyline with open-world exploration.',
      'Designed rolling ball mechanics, interactive elements, and player progression systems.'
    ],
    tags: ['Unreal Engine 4', 'Open World', 'Physics'],
    link: 'https://www.bilibili.com/video/BV1RSwreqET5/',
    image: 'https://picsum.photos/seed/reimu/800/450',
    type: 'Game'
  },
  {
    id: 'coco-adventure',
    title: "Coco's Adventure",
    subtitle: 'AR Storybook Game',
    description: [
      'AR storybook project for children aged 7-12 using Unity and Vuforia Engine.',
      'Planned story flow, level interactions, environment building, and water simulation.'
    ],
    tags: ['Unity', 'Vuforia', 'AR', 'Child Education'],
    link: 'https://www.bilibili.com/video/BV1VKwzeFERZ/',
    image: 'https://picsum.photos/seed/coco/800/450',
    type: 'Game'
  },
  {
    id: 'veritas-ratio',
    title: 'Veritas Ratio',
    subtitle: 'AR Interactive Experience',
    description: [
      'Developed two interactive AR experiences: AR birthday card and personal business card.',
      'Implemented image-based recognition and touch interaction for AR object manipulation.'
    ],
    tags: ['Unity', 'AR', 'Interactive Media'],
    link: 'https://www.bilibili.com/video/BV1oMBbYkEpP/',
    image: 'https://picsum.photos/seed/veritas/800/450',
    type: 'Game'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Game Engines',
    skills: ['Unity', 'Unreal Engine 4', 'Unreal Engine 5']
  },
  {
    title: 'Programming',
    skills: ['C#', 'C++', 'Python']
  },
  {
    title: '3D Software',
    skills: ['3ds Max', 'Maya', 'Blender', 'Marvelous Designer', 'Vroid Studio', 'Cascadeur', 'XR Animator']
  },
  {
    title: 'Design & AI',
    skills: ['Photoshop', 'After Effects', 'Premiere Pro', 'Stable Diffusion', 'GPT-SoVITS v3']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Motion Designer (Intern)',
    company: 'Xiamen So Funny Technology Co., Ltd',
    period: 'Feb 2025 - Jun 2025',
    points: [
      'Character rigging and skinning for "Sausage Man - Evacuation Team"',
      'Designed idle poses and showcase card poses',
      'Optimized character animations and created prop animations'
    ],
    tools: ['3ds Max', 'Maya', 'Unity']
  },
  {
    role: '3D Animator',
    company: 'Sanming Sansteel Automobile Transportation Co.',
    period: 'Jun 2024 - Aug 2024',
    points: [
      'Created 3D models and animations for smart logistics training display templates',
      'Developed interactive animation features for immersive user experience',
      'Collaborated in 4-person team focused on 3D modeling and animation pipeline'
    ],
    tools: ['3ds Max', 'Interactive Animation']
  },
  {
    role: 'Art Director',
    company: 'Xiamen University Admissions Office',
    period: 'Oct 2022 - Apr 2024',
    points: [
      'Designed and illustrated promotional posters and WeChat official account graphics',
      'Collaborated with team to ensure visual consistency with campus branding',
      'Enhanced campus visibility through high-quality promotional materials'
    ],
    tools: ['Design Pipeline', 'Leadership']
  }
];
