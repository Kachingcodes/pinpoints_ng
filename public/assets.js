import logo from './logo.png';
// import logo2 from './logo2.png';
import client from './client.png';
import handshake from './handshake.png';
import industry from './industry.png';
import review from './review.png';
import ada from './ada.jpg';
import ebun from './ebun.jpg';
import emeka from './emeka.jpg';
import { Building, CheckCircle, Eye, Flashlight, FlashlightIcon, HandCoins, Handshake, Search, Truck } from "lucide-react";
import { Landmark, Fuel, Utensils, School, Hotel, Hospital, User } from "lucide-react";
import Industry from '@/app/components/Industry';


export const assets = {
  logo,
  // logo2,
  ada,
  ebun,
  emeka,
  client,
  handshake,
  industry,
  review
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
  {
    q: "I lent money, but the debtor is avoiding me. What can I do?",
    a: "You can begin with formal reminders, and if that fails, we can step in to negotiate or use legal means to recover your money."
  },
  {
    q: "Will debt recovery ruin my relationship with the debtor?",
    a: "Not necessarily. We often use peaceful approaches like negotiation or mediation to maintain relationships while securing repayment."
  },
  {
    q: "What if the debtor has no money to pay now?",
    a: "We can help arrange structured repayment plans so you can still recover your funds over time."
  },
  {
    q: "How do I know if a company or person I want to deal with is genuine?",
    a: "We run background checks, verify financial records, and confirm credibility before you engage with them."
  },
  {
    q: "Can you help me trace someone who owes me but has disappeared?",
    a: "Yes. We conduct discreet investigations to locate debtors and verify their current status."
  },
  {
    q: "Do I have to go to court to resolve a business dispute?",
    a: "No. Many disputes can be settled faster and cheaper through mediation or arbitration instead of court."
  },
  {
    q: "Will ADR decisions be respected?",
    a: "Yes. Settlements and arbitration awards can be legally enforced in Nigeria."
  },
  {
    q: "Before giving a loan, how can I confirm if someone can repay?",
    a: "We check their credit history, financial capacity, and background to help you make safe decisions."
  },
  {
    q: "Can you verify a company’s claims before I invest?",
    a: "Absolutely. We verify documents, financial standing, and compliance to protect your investment."
  },
  {
    q: "Is my information safe when I request a credit search?",
    a: "Yes. All searches are confidential and handled according to data protection standards."
  }
];
