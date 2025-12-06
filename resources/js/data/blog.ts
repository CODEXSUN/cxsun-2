export type BlogPost = {
    id: string;
    title: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
    PostImage: string;
    category: string;
    tags: string[];
    description: string; // HTML string
    isComment?: boolean;
};
export const Blogs: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Smart Homes in Modern Construction",
    description: `
      <h2>The Future of Smart Homes in Modern Construction</h2>
      <p>
        The construction industry is evolving rapidly with the integration of smart home technologies.
        Modern homes are now designed for comfort, efficiency, and automation, enabling homeowners
        to control lighting, security, climate, and appliances from a single interface.
      </p>

      <h3>Advantages of Smart Homes</h3>
      <ul>
        <li><strong>Energy Efficiency:</strong> Automated lighting and HVAC systems reduce energy consumption.</li>
        <li><strong>Enhanced Security:</strong> Smart locks, cameras, and alarms for complete home safety.</li>
        <li><strong>Remote Management:</strong> Control and monitor your home from anywhere in the world.</li>
        <li><strong>Future-Ready Designs:</strong> Homes equipped for integration with AI and IoT devices.</li>
      </ul>

      <h3>Impact on the Construction Industry</h3>
      <p>
        Builders and developers are leveraging smart technologies to create high-value homes.
        This trend is transforming design standards, improving sustainability, and attracting tech-savvy buyers.
      </p>
    `,
    PostImage: "/images/home/slider/textile4.jpg",
    author: {
      name: "Ravi",
      avatar: "/assets/team/image.png",
    },
    date: "September 5, 2025",
    category: "Construction & Technology",
    tags: [
      "Smart Homes",
      "Construction Technology",
      "Automation",
      "Sustainable Living",
      "Future Homes",
    ],
    isComment: false,
  },
  {
    id: "2",
    title: "Top 5 Trends in Commercial Building Design for 2025",
    description: `
      <h2>Top 5 Trends in Commercial Building Design for 2025</h2>
      <p>
        Commercial construction is witnessing exciting trends as businesses demand functional, sustainable,
        and visually appealing spaces. From eco-friendly materials to flexible office layouts, the design landscape is shifting.
      </p>

      <h3>Key Commercial Construction Trends</h3>
      <ul>
        <li><strong>Green Buildings:</strong> Incorporating sustainable materials and energy-efficient designs.</li>
        <li><strong>Open Workspaces:</strong> Flexible layouts that encourage collaboration.</li>
        <li><strong>Smart Infrastructure:</strong> IoT-enabled systems for lighting, HVAC, and security.</li>
        <li><strong>Adaptive Reuse:</strong> Renovating old buildings for modern commercial needs.</li>
        <li><strong>Wellness-Oriented Design:</strong> Incorporating natural light, ventilation, and relaxation zones.</li>
      </ul>

      <h3>Benefits for Businesses & Tenants</h3>
      <p>
        These trends enhance productivity, reduce operational costs, and improve employee satisfaction while boosting the value of commercial properties.
      </p>
    `,
    PostImage: "/images/home/slider/textile4.jpg",
    author: {
      name: "Ananya",
      avatar: "/assets/team/image.png",
    },
    date: "September 12, 2025",
    category: "Commercial Construction",
    tags: [
      "Green Buildings",
      "Commercial Design",
      "Smart Infrastructure",
      "Workplace Trends",
      "Sustainability",
    ],
    isComment: false,
  },
  {
    id: "3",
    title: "Essential Tips for Planning Industrial Construction Projects",
    description: `
      <h2>Essential Tips for Planning Industrial Construction Projects</h2>
      <p>
        Industrial construction requires meticulous planning, efficient layouts, and strict adherence to safety standards.
        Proper project management ensures that factories, warehouses, and logistics hubs operate smoothly.
      </p>

      <h3>Planning Considerations</h3>
      <ul>
        <li><strong>Site Assessment:</strong> Evaluate terrain, utilities, and logistics access.</li>
        <li><strong>Regulatory Compliance:</strong> Follow local and international safety and building standards.</li>
        <li><strong>Workflow Optimization:</strong> Design layouts that streamline production and storage.</li>
        <li><strong>Material Selection:</strong> Durable and sustainable materials to withstand heavy use.</li>
      </ul>

      <h3>Benefits of Proper Planning</h3>
      <p>
        A well-planned industrial project reduces operational costs, ensures worker safety, and increases overall efficiency and productivity.
      </p>
    `,
    PostImage: "/images/home/slider/textile4.jpg",
    author: {
      name: "Karthik",
      avatar: "/assets/team/image.png",
    },
    date: "September 20, 2025",
    category: "Industrial Construction",
    tags: [
      "Industrial Projects",
      "Project Planning",
      "Construction Safety",
      "Warehouse Design",
      "Factories",
    ],
    isComment: false,
  },
];
