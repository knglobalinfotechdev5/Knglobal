import img1 from "../src/assets/gas.jpg";
import img2 from "../src/assets/fms.jpeg";
import img3 from "../src/assets/collect.webp";
import img5 from "../src/assets/store.png";
import img4 from "../src/assets/doc.jpg";
import img6 from "../src/assets/pos.png";
import mission from "../src/assets/mission.png";
import vision from "../src/assets/vission.png";
import value from "../src/assets/value.png";
import men from "../src/assets/men.jpg";
import opmanager from "../src/assets/opmanager.jpg";
import sales from "../src/assets/sales.png";
import security from "../src/assets/security.png";
import mobilepos from "../src/assets/mobilepos.png";
import inventory from "../src/assets/inventory.png";
import realtime from "../src/assets/real-time.png";
import check from "../src/assets/checklist.png";
import financing from '../src/assets/financing.png'
import graph from '../src/assets/graph.png'
import invoice from '../src/assets/invoice.png'
import collaboration from '../src/assets/collaboration.png'
import scanner from '../src/assets/scanner.png'
import automation from '../src/assets/automation.png'
import merge from '../src/assets/merge.png'
import searching from '../src/assets/searching.png'
import payroll from '../src/assets/payroll.png'
import team from '../src/assets/team.png'
import inventorys from '../src/assets/inventorys.png'
import crm from '../src/assets/crm.png'
import proficiency from '../src/assets/proficiency.png'
import banking from '../src/assets/banking.png'
import reminder from '../src/assets/reminder.png'
import card from '../src/assets/card.png'
import internet from '../src/assets/internet.png'






export const products = [
  {
    id: 1,
    img: img1,
    name: "KN Gas Management System",
  },
  {
    id: 2,
    img: img2,
    name: "KN Finance Management System",
  },
  {
    id: 3,
    img: img3,
    name: "KN Collection Management System",
  },
  {
    id: 4,
    img: img4,
    name: "KN Document Management System",
  },
  {
    id: 5,
    img: img5,
    name: "KN Store Management System",
  },
  {
    id: 6,
    img: img6,
    name: "KN POS System",
  },
];
export const review = [
  {
    id: 1,
    name: "John Smith",
    profession: "IT Manager, Horizon Enterprises",
    star: "5",
    review:
      '"KN Global Infotech has been a game-changer for us. Their ERP system has streamlined our operations, improved data accuracy, and enhanced overall efficiency. The integration process was smooth, and the support team was exceptionally responsive. Highly recommend their solutions for businesses looking to optimize their workflow."',
  },
  {
    id: 2,
    name: "Sarah Lee",
    profession: "Operations Director, Luxe Hotels",
    star: "4",
    review:
      '"The hotel management system provided by KN Global Infotech has significantly improved our booking and management processes. The user-friendly interface and customization options were just what we needed. The system’s performance has exceeded our expectations, making our operations more efficient and our guests happier."',
  },
  {
    id: 3,
    name: "Emma Davis",
    profession: "HR Coordinator, Stellar Tech Solutions",
    star: "5",
    review:
      '"Using KN Global Infotech’s document management system has revolutionized how we handle our documentation. The secure and organized system has made it easier to access and manage important documents. The added features for data protection and retrieval have been incredibly beneficial for our HR department."',
  },
  // {
  //   id: 4,
  //   name: "Emma Johns",
  //   profession: "HR Coordinator, Stellar Tech Solutions",
  //   star: "4",
  //   review:
  //     '"Working with KN Global Info Tech has been a transformative experience for our company. Their team not only delivered a high-quality software solution but also provided invaluable insights that improved our overall project scope. The application is robust, user-friendly, and precisely tailored to our needs."',
  // },
  // {
  //   id: 5,
  //   name: "Gemini",
  //   profession: "HR Coordinator, Stellar Tech Solutions",
  //   star: "4",
  //   review:
  //     '"We had a fantastic experience with [Agency Name]. From the very beginning, their team showed exceptional professionalism and dedication. They communicated clearly and often, which helped us stay informed and aligned throughout the project."',
  // },
];
// export const SolutionLink = [
//     {
//         id:1,
//         link:"",
//         name:'Procurement and Inventory'
//     },
//     {
//         id:2,
//         link:"",
//         name:'Service Management'
//     },
//     {
//         id:3,
//         link:"",
//         name:'Sales Management'
//     },
//     {
//         id:4,
//         link:"",
//         name:'POS System'
//     },
//     {
//         id:5,
//         link:"",
//         name:'E-service Management'
//     },
//     {
//         id:6,
//         link:"",
//         name:'Document Management'
//     },
//     {
//         id:7,
//         link:"",
//         name:'Collection Management'
//     }
// ]
export const ProductLink = [
    // 1. KN Gas Distribution System
    {
      id: 1,
      link: "/kngd",
      name: "KN Gas Management System",
      detail: [
        {
          id: 1,
          content:
            "KN Gas Distribution System offers seamless solutions for managing the entire gas supply chain, from storage to distribution, ensuring efficiency, safety, and real-time monitoring. Our system is designed to automate the complex logistics of gas distribution, minimizing downtime and maximizing operational efficiency.",
          feature: [
            {
              id: 1,
              img: inventory, // Replace with actual image
              name: "Automated Dispatch",
              text: "Automatically allocate and dispatch gas to various distribution points based on demand.",
            },
            {
              id: 2,
              img: sales, // Replace with actual image
              name: "Sales Tracking",
              text: "Monitor sales trends and generate reports to optimize supply based on market demand.",
            },
            {
              id: 3,
              img: mobilepos, // Replace with actual image
              name: "Mobile Tracking",
              text: "Real-time monitoring of gas trucks with GPS integration for better route management.",
            },
            {
              id: 4,
              img: security, // Replace with actual image
              name: "Safety Compliance",
              text: "Ensure compliance with safety regulations by monitoring pressure, leaks, and gas levels.",
            },
            {
              id: 5,
              img: realtime, // Replace with actual image
              name: "Real-time Analytics",
              text: "Get real-time data analytics on gas levels, sales, and distribution efficiencies.",
            },
            {
              id: 6,
              img: check, // Replace with actual image
              name: "Order Management",
              text: "Track orders from gas stations and distributors for timely deliveries and restocking.",
            },
          ],
        },
      ],
    },
    // 2. KN Finance Management System
    {
      id: 2,
      link: "/knfm",
      name: "KN Finance Management",
      detail: [
        {
          id: 1,
          content:
            "KN Finance Management System is a comprehensive solution for managing all financial operations, including budgeting, payroll, invoicing, and reporting. This system streamlines accounting workflows and ensures compliance with financial regulations.",
          feature: [
            {
              id: 1,
              img: financing,
              name: "Budgeting Tools",
              text: "Create, monitor, and manage budgets across multiple departments with real-time tracking.",
            },
            {
              id: 2,
              img: invoice, 
              name: "Automated Invoicing",
              text: "Generate and send invoices automatically to clients with integration to payment gateways.",
            },
            {
              id: 3,
              img: payroll,
              name: "Payroll Management",
              text: "Automate payroll processing and ensure timely salary disbursement with tax compliance.",
            },
            {
              id: 4,
              img: graph,
              name: "Financial Reports",
              text: "Generate detailed financial reports, including profit and loss statements, balance sheets, and cash flow reports.",
            },
            {
              id: 5,
              img: realtime, 
              name: "Expense Tracking",
              text: "Monitor and categorize expenses in real-time for better financial decision-making.",
            },
            {
              id: 6,
              img: check, 
              name: "Audit Support",
              text: "Support for internal and external audits with a full audit trail for all transactions.",
            },
          ],
        },
      ],
    },
    // 3. KN POS System
    {
      id: 3,
      link: "/knpos",
      name: "KN POS",
      detail: [
        {
          id: 1,
          content:
            "KN POS System is an advanced Point of Sale system designed to handle all aspects of retail and hospitality transactions. It supports multi-location management, inventory tracking, and real-time analytics, making it ideal for businesses of any size.",
          feature: [
            {
              id: 1,
              img: inventory, // Replace with actual image
              name: "Inventory Management",
              text: "Track stock levels in real-time, automate reordering, and receive alerts for low stock.",
            },
            {
              id: 2,
              img: sales, // Replace with actual image
              name: "Sales Reporting",
              text: "Generate detailed reports on sales trends, best-selling items, and revenue analysis.",
            },
            {
              id: 3,
              img: mobilepos, // Replace with actual image
              name: "Mobile POS",
              text: "Enable transactions from tablets or smartphones, ideal for table-side service or pop-up events.",
            },
            {
              id: 4,
              img: security, // Replace with actual image
              name: "Security Features",
              text: "Implement user authentication, data encryption, and secure payment processing.",
            },
            {
              id: 5,
              img: realtime, // Replace with actual image
              name: "Real-time Analytics",
              text: "Monitor performance metrics such as sales per hour, average transaction value, and foot traffic.",
            },
            {
              id: 6,
              img: check, // Replace with actual image
              name: "Order Management",
              text: "Track orders from placement to fulfillment, including special requests and delivery options.",
            },
          ],
        },
      ],
    },
    // 4. KN Document Management System
    {
      id: 4,
      link: "/kndms",
      name: "KN Document Management",
      detail: [
        {
          id: 1,
          content:
            "KN Document Management System (DMS) enables organizations to digitize, store, and manage their documents securely. It includes automated workflows, version control, and role-based access to ensure that sensitive information is protected and easily accessible.",
          feature: [
            {
              id: 1,
              img: scanner, // Replace with actual image
              name: "Document Scanning",
              text: "Scan paper documents and convert them into searchable digital formats with OCR technology.",
            },
            {
              id: 2,
              img: automation, // Replace with actual image
              name: "Automated Workflows",
              text: "Automate document routing and approval workflows to streamline business processes.",
            },
            {
              id: 3,
              img: merge, // Replace with actual image
              name: "Version Control",
              text: "Maintain document versions and track changes over time with audit trails.",
            },
            {
              id: 4,
              img: security, // Replace with actual image
              name: "Secure Access",
              text: "Control access to sensitive documents with role-based permissions and encryption.",
            },
            {
              id: 5,
              img: collaboration, // Replace with actual image
              name: "Collaboration Tools",
              text: "Enable team collaboration by allowing simultaneous access to documents and comments.",
            },
            {
              id: 6,
              img: searching, // Replace with actual image
              name: "Search and Retrieval",
              text: "Quickly search and retrieve documents using advanced indexing and metadata features.",
            },
          ],
        },
      ],
    },
    // 5. KN Store Management System
    {
      id: 5,
      link: "/knsms",
      name: "KN Store Management",
      detail: [
        {
          id: 1,
          content:
            "KN Store Management System provides retail businesses with tools to manage inventory, sales, customer interactions, and employee performance. The system is designed for scalability and supports multi-store operations with real-time monitoring.",
          feature: [
            {
              id: 1,
              img: inventory, // Replace with actual image
              name: "Multi-Store Support",
              text: "Manage multiple stores from a centralized dashboard with real-time updates.",
            },
            {
              id: 2,
              img: proficiency, // Replace with actual image
              name: "Employee Performance",
              text: "Track employee performance metrics, including sales, attendance, and customer feedback.",
            },
            {
              id: 3,
              img:crm, // Replace with actual image
              name: "Customer Relationship Management (CRM)",
              text: "Manage customer data, track loyalty programs, and enhance customer interactions.",
            },
            {
              id: 4,
              img: inventorys, // Replace with actual image
              name: "Real-time Inventory",
              text: "Monitor inventory levels across all stores in real-time and set automated reordering rules.",
            },
            {
              id: 5,
              img: sales, // Replace with actual image
              name: "Sales Insights",
              text: "Generate real-time sales reports to understand consumer trends and optimize inventory.",
            },
            {
              id: 6,
              img:team, // Replace with actual image
              name: "Supplier Management",
              text: "Manage supplier information and track delivery schedules to maintain stock levels.",
            },
          ],
        },
      ],
    },
    // 6. KN Collection System
    {
      id: 6,
      link: "/kncollection",
      name: "KN Collection Management System",
      detail: [
        {
          id: 1,
          content:
            "KN Collection System is designed for managing collections, including invoices, payments, and overdue accounts. It ensures timely follow-ups, generates automated reminders, and integrates with multiple payment gateways to streamline the collection process.",
          feature: [
            {
              id: 1,
              img: reminder, // Replace with actual image
              name: "Automated Reminders",
              text: "Send automated payment reminders to customers with overdue invoices.",
            },
            {
              id: 2,
              img: banking, // Replace with actual image
              name: "Payment Gateway Integration",
              text: "Integrate with multiple payment gateways to allow customers to pay through their preferred method.",
            },
            {
              id: 3,
              img:invoice, // Replace with actual image
              name: "Invoice Tracking",
              text: "Track all issued invoices and follow up on outstanding payments with ease.",
            },
            {
              id: 4,
              img: card, // Replace with actual image
              name: "Late Fee Calculation",
              text: "Automatically calculate and apply late fees for overdue payments.",
            },
            {
              id: 5,
              img: realtime, // Replace with actual image
              name: "Real-time Reports",
              text: "Generate real-time reports on collection progress and customer payment history.",
            },
            {
              id: 6,
              img: internet, // Replace with actual image
              name: "Customer Portal",
              text: "Provide customers with a portal where they can view their invoices and make payments.",
            },
          ],
        },
      ],
    },
    // // 7. KN Self POS System
    // {
    //   id: 7,
    //   link: "/knselfpos",
    //   name: "KN Self POS",
    //   detail: [
    //     {
    //       id: 1,
    //       content:
    //         "KN Self POS System allows customers to complete transactions on their own, reducing wait times and improving the customer experience. This system is perfect for retail and food service businesses looking to enhance their operations with self-service options.",
    //       feature: [
    //         {
    //           id: 1,
    //           img: inventory, // Replace with actual image
    //           name: "Touchscreen Interface",
    //           text: "User-friendly touchscreen interface for quick and easy self-checkout.",
    //         },
    //         {
    //           id: 2,
    //           img: sales, // Replace with actual image
    //           name: "Contactless Payments",
    //           text: "Support for contactless payments, including mobile wallets and tap-to-pay cards.",
    //         },
    //         {
    //           id: 3,
    //           img: mobilepos, // Replace with actual image
    //           name: "Receipt Printing",
    //           text: "Automatically print receipts or send digital copies via email or SMS.",
    //         },
    //         {
    //           id: 4,
    //           img: security, // Replace with actual image
    //           name: "Barcode Scanning",
    //           text: "Built-in barcode scanning for fast and accurate product identification.",
    //         },
    //         {
    //           id: 5,
    //           img: realtime, // Replace with actual image
    //           name: "Real-time Inventory Updates",
    //           text: "Automatically update inventory in real-time as items are purchased.",
    //         },
    //         {
    //           id: 6,
    //           img: check, // Replace with actual image
    //           name: "Loyalty Program Integration",
    //           text: "Integrate with loyalty programs to allow customers to earn and redeem points.",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  

export const AboutLink = [
  {
    id: 1,
    link: "/Company",
    name: "Company Info",
  },
  {
    id: 2,
    link: "/Ourteam",
    name: "Our Team",
  },
  {
    id: 3,
    link: "/T&C",
    name: "Term & Condition",
  },
  {
    id: 4,
    link: "/PrivacyPolicy",
    name: "Privacy Policy",
  },
  {
    id: 5,
    link: "/RefundPolicy",
    name: "Refund Policy",
  },
];
export const Accordation = [
  {
    id: 1,
    question: "What services does KN GLOBAL INFOTECH offer?",
    answer:
      "We offer ERP, POS, hotel management, and customized software solutions across industries.",
  },
  {
    id: 2,
    question: "What programming languages do you specialize in?",
    answer:
      "Our team specializes in TypeScript,Angular,Iconic,.Net,Visual Basic ...etc",
  },
  {
    id: 3,
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for a project varies depending on its scope and complexity. We work closely with our clients to establish realistic timelines and keep them updated throughout the process.",
  },
  {
    id: 4,
    question: "How do you ensure your solutions fit my business needs?",
    answer:
      "We engage closely with clients to understand their specific requirements and tailor solutions accordingly.",
  },
  {
    id: 5,
    question: "Can your software integrate with my existing systems?",
    answer:
      "Yes, our solutions ensure seamless integration and collaboration across platforms.",
  },
];
export const WhyChoosePoints = [
  {
    id: 1,
    content: "Custom Software Solutions for various industries.",
  },
  {
    id: 2,
    content: "Specialization in ERP, POS, and hotel management systems.",
  },
  {
    id: 3,
    content: "Client-Centric Approach, with personalized support.",
  },
  {
    id: 4,
    content: "Seamless Integration with existing systems.",
  },
  {
    id: 5,
    content: "Innovative Technology to enhance operational efficiency.",
  },
  {
    id: 6,
    content: "24/7 Technical Support ensuring minimal downtime.",
  },
  {
    id: 7,
    content: "Scalable Solutions that grow with your business.",
  },
  {
    id: 8,
    content: "Proven Track Record of successful projects.",
  },
];
export const VMV = [
  {
    id: 1,
    icon: vision,
    name: "Vision",
    content:
      "To be a global leader in delivering innovative, customized software solutions that empower businesses to thrive in a digitally transforming world.",
  },
  {
    id: 2,
    icon: mission,
    name: "Mission",
    content:
      "To provide tailored, high-quality technology solutions that enhance business efficiency, foster growth, and offer seamless integration with evolving business needs.",
  },
  {
    id: 3,
    icon: value,
    name: "Value",
    content:
      "At KN Global Infotech, we prioritize customer success through innovation, collaboration, and integrity. Our commitment to excellence ensures high-quality Applications",
  },
];
export const Refund = [
  {
    id: 1,
    title: "1. Software Service Charges",
    content: [
      "Quarterly Payments: Clients must pay for software services in advance on a quarterly basis. If the Client decides to stop using the services, the remaining balance for the unused portion will be refunded. The refund will be adjusted according to how much of the service has been used.",
      "Refund Conditions: To qualify for a refund, the Client must provide a written notice of service discontinuation. The refund will be calculated from the date the notice is received.",
    ],
  },
  {
    id: 2,
    title: "2. Cloud Server Charges",
    content: [
      "Annual Payments: Clients are required to pay for cloud server services on an annual basis in advance. This payment covers the entire year of service, ensuring the required resources are allocated and maintained.",
      "Non-Refundable: Once paid, cloud server charges are non-refundable, even if the service is discontinued during the year. This policy ensures the availability of server resources for the Client’s use throughout the year.",
    ],
  },
  {
    id: 3,
    title: "3. How to Request a Refund",
    content: [
      "To request a refund for software service charges, the Client must send an email to support@knglobalinfotech.com. The request should include the Client’s account details and a written statement indicating discontinuation of services. Refund requests are typically processed within 30 days of receipt.",
    ],
  },
  {
    id: 4,
    title: "4. Amendments to the Refund Policy",
    content: [
      "KN Global Info Tech reserves the right to change this Refund Policy at any time. Any updates will be communicated to clients through the company’s website or by direct notification. Changes take effect upon posting or notification.",
    ],
  },
];
export const Privacy = [
  {
    id: 1,
    title: "1. Information Collection",
    content: [
      "Contact Details: Information such as your name, email address, phone number, and other contact information.",
      "Billing Information: Details required for processing payments, such as credit card numbers, billing addresses, and related financial information.",
      "Other Data: Any additional information you voluntarily provide to us to facilitate the delivery of our services.",
    ],
  },
  {
    id: 2,
    title: "2. Cloud Server Charges",
    content: [
      "Annual Payments: Clients are required to pay for cloud server services on an annual basis in advance. This payment covers the entire year of service, ensuring the required resources are allocated and maintained.",
      "Non-Refundable: Once paid, cloud server charges are non-refundable, even if the service is discontinued during the year. This policy ensures the availability of server resources for the Client’s use throughout the year.",
    ],
  },
  {
    id: 3,
    title: "3. How to Request a Refund",
    content: [
      "To request a refund for software service charges, the Client must send an email to support@knglobalinfotech.com. The request should include the Client’s account details and a written statement indicating discontinuation of services. Refund requests are typically processed within 30 days of receipt.",
    ],
  },
  {
    id: 4,
    title: "4. Amendments to the Refund Policy",
    content: [
      "KN Global Info Tech reserves the right to change this Refund Policy at any time. Any updates will be communicated to clients through the company’s website or by direct notification. Changes take effect upon posting or notification.",
    ],
  },
];
export const TermsAndConditions = [
    {
      id: 1,
      title: "1. Scope of Work",
      content: [
        "KN GLOBAL INFO TECH agrees to develop software as per the specifications provided by the Client. Any changes to the project scope must be agreed upon in writing by both parties. Timely delivery depends on the Client providing necessary resources and feedback. Delays caused by the Client may alter delivery dates.",
      ],
    },
    {
      id: 2,
      title: "2. Payment Terms",
      content: [
        "Payments will follow the schedule outlined in the project agreement, based on milestones or deliverables. Additional work outside the original scope will be billed separately at our standard rates or as agreed upon.",
      ],
    },
    {
      id: 3,
      title: "3. Intellectual Property",
      content: [
        "Upon full payment, the Client will own the rights to the developed software and associated intellectual property. We retain the right to use general knowledge gained during the project for future work and to include the project in portfolios or case studies.",
      ],
    },
    {
      id: 4,
      title: "4. Confidentiality",
      content: [
        "Both parties agree to maintain confidentiality of any proprietary information exchanged during the project. This obligation extends beyond the project’s completion.",
      ],
    },
    {
      id: 5,
      title: "5. General Conditions",
      content: [
        "We reserve the right to refuse service to anyone and are not liable for errors or inaccuracies on our site.",
      ],
    },
    {
      id: 6,
      title: "6. Governing Law",
      content: [
        "These terms are governed by the laws of Tamil Nadu, India. Any disputes will be resolved under these laws.",
      ],
    },
    {
      id: 7,
      title: "7. Contact Information",
      content: [
        "For questions about these Terms of Service, please contact us at support@knglobalinfotech.com.",
      ],
    },
  ];
  
export const Team = [
  {
    id: 1,
    img: men,
    profession: "MANAGING DIRECTOR",
    name: "Aneesdeen",
    content:
      "Mr. Aneesdeen, armed with a Master of Science in Information Technology attained in 2007, embarked on his professional journey in 2008 as a software developer in the dynamic landscape of the Middle East. Over the years, he has seamlessly transitioned through various pivotal roles, including technical team leader, software team leader, and solution manager.With a wealth of experience spanning over a decade, Aneesdeen has honed his expertise in Enterprise Resource Planning (ERP) systems and Software Development Life Cycle (SDLC) methodologies across a diverse array of industries. His adeptness in navigating the intricacies of ERP implementation and management has contributed to the operational efficiency and growth of numerous organizations.In 2023, leveraging his extensive industry knowledge and visionary outlook, Aneesdeen embarked on a new chapter in his professional odyssey by founding KN GLOBAL INFO TECH, a testament to his entrepreneurial spirit and commitment to driving innovation in the technological sphere.As the Managing Director of KN GLOBAL INFO TECH, Aneesdeen brings forth a potent blend of leadership, technical prowess, and strategic acumen, steering the company towards unprecedented heights of success. Under his guidance, KN GLOBAL INFO TECH continues to thrive as a beacon of innovation, delivering cutting-edge solutions that empower businesses to transcend boundaries and achieve their full potential.",
  },
  {
    id: 2,
    img: opmanager,
    profession: "OPERATION MANAGER",
    name: "Kumar",
    content:
      "Mr. Kumar completed his Master of Commerce degree in 2005. With a solid foundation in finance, accounting, and business management, Kumar has developed a comprehensive understanding of commercial principles and practices. His academic achievements have equipped him with the skills necessary to excel in various financial and operational roles.Kumar has accumulated significant professional experience, particularly in the Gulf region, where he spent eight years in a supporting role. During this time, he honed his expertise in business operations, client relations, and support services. His experience in the Gulf has given him a unique perspective on international business practices and the ability to navigate diverse cultural environments.Currently, Kumar serves as the Operations Manager at KN Global Info Tech. In this capacity, he is responsible for overseeing the daily operations of the company, ensuring that all processes run smoothly and efficiently. Kumar's role involves coordinating between different departments, optimizing operational workflows, and implementing strategic initiatives to enhance productivity and customer satisfaction. His leadership and management skills have been pivotal in driving the company's growth and operational excellence.",
  },
];