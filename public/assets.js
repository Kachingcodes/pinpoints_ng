import handshake2 from './handshake2.jpg';
import { Building, CheckCircle, Eye, Flashlight, FlashlightIcon, HandCoins, Handshake, Search, Truck } from "lucide-react";
import { Landmark, Fuel, Utensils, School, Hotel, Hospital, User } from "lucide-react";


export const assets = {
    handshake2
};


export const stats = [
  { number: "25+", label: "YEARS", sub: "EXPERIENCE" },
  { number: "150+", label: "CASES", sub: "RESOLVED" },
  { number: "98%", label: "SUCCESS", sub: "RATE" },
  { number: "20+", label: "EXPERTS", sub: "TEAM" },
];


export const services = [
    {
        icon: <HandCoins/>,
        header: "Debt Management and Recovery",
        text: "Professional debt collection services with high recovery rates and ethical practices.",
        list: [
            { icon:<CheckCircle size={16} className='text-red-600'/>, label:"Commercial Debt Recovery"}, 
            { icon:<CheckCircle size={16} className='text-red-600'/>, label:"Consumer Debt Collection"}, 
            { icon:<CheckCircle size={16} className='text-red-600'/>, label:"Legal Action Support"},
            { icon:<CheckCircle size={16} className='text-red-600'/>, label: "Asset Tracing"}, 
        ],
    },
    {
        icon: <Building/>,
        header: "Office Consultancy",
        text: "Strategic business consulting to optimize operations and drive growth.",
        list: [
            { icon:<CheckCircle size={16} className='text-red-600'/>, label:"Business Process Optimization"}, 
            { icon:<CheckCircle size={16} className='text-red-600'/>, label:"Financial Consulting"}, 
            { icon:<CheckCircle size={16} className='text-red-600'/>, label:"Risk Management"}, 
            { icon:<CheckCircle size={16} className='text-red-600'/>, label:"Strategic Planning"},
        ],
    },
    {
        icon: <Eye/>,
        header: "Private Commercial Investigation",
        text: "Discreet investigation services for personal and corporate clients",
        list: [
           { icon:<CheckCircle size={16} className='text-red-600'/>, label: "Background Checks"}, 
           { icon:<CheckCircle size={16} className='text-red-600'/>, label: "Corporate Investigations"}, 
           { icon:<CheckCircle size={16} className='text-red-600'/>, label: "Credit Search & Verification"}, 
           { icon:<CheckCircle size={16} className='text-red-600'/>, label: "grape"}, 
        ],
    },
    {
        icon: <Handshake/>,
        header: "Alternative Dispute Resolution",
        text: "Lovely",
        list: [
            { icon:<CheckCircle size={16} className='text-red-600'/>, label: "apple" },
            { icon:<CheckCircle size={16} className='text-red-600'/>, label: "citrus" },
            { icon:<CheckCircle size={16} className='text-red-600'/>, label: "mangoe" },
            { icon:<CheckCircle size={16} className='text-red-600'/>, label: "grape" }
           ]
    }
];

export const sectors = [
  { name: "Bank", icon: <Landmark size={16} className="mr-2" /> },
  { name: "Oil & Gas", icon: <Fuel size={16} className="mr-2" /> },
  { name: "Restaurants", icon: <Utensils size={16} className="mr-2" /> },
  { name: "Schools", icon: <School size={16} className="mr-2" /> },
  { name: "Hotels", icon: <Hotel size={16} className="mr-2" /> },
  { name: "Hospitals", icon: <Hospital size={16} className="mr-2" /> },
  { name: "Individuals", icon: <User size={16} className="mr-2" /> },
];

export const faqs = [
  { q: "What is a car?", a: "A car is a wheeled motor vehicle used for transportation." },
  { q: "How long is delivery?", a: "Delivery usually takes between 3–5 business days." },
  { q: "Do you offer warranty?", a: "Yes, all our products come with at least 1 year warranty." },
  { q: "Can I track my order?", a: "Absolutely, tracking info is shared once your order is shipped." },
  { q: "Do you ship internationally?", a: "Yes, we ship worldwide with additional costs." },
  { q: "Can I return a product?", a: "Yes, products can be returned within 14 days." },
  { q: "What payment methods are accepted?", a: "We accept credit cards, PayPal, and bank transfers." },
  { q: "Is there customer support?", a: "Yes, our support team is available 24/7." },
  { q: "Do you offer bulk discounts?", a: "Yes, discounts are available for bulk orders." },
  { q: "Are my details safe?", a: "We ensure all transactions are encrypted and secure." },
];