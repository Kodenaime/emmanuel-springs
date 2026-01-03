"use client";

import { useState } from "react";
import { Check, Copy, Landmark, BookOpen, Heart, Smartphone, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type DonationTab = "NGN" | "USD" | "MPESA";

export default function DonationSection() {
  const [activeTab, setActiveTab] = useState<DonationTab>("NGN");
  const [copied, setCopied] = useState(false);

 
  const accounts = {
    NGN: {
      label: "Nigeria (NGN)",
      icon: <Landmark className="w-4 h-4" />,
      bankName: "GTBank",
      accountName: "Emmanuel Foundation",
      number: "0123456789",
      extra: null,
    },
    USD: {
      label: "International (USD)",
      icon: <Globe className="w-4 h-4" />,
      bankName: "GTBank (USD Account)",
      accountName: "Priscilla Yusuf",
      number: "0893837838", 
      displayNumber: "0893 837 838",
      extra: "SWIFT Code: GTBINGLA",
    },
    MPESA: {
      label: "Kenya / Mobile",
      icon: <Smartphone className="w-4 h-4" />,
      bankName: "M-Pesa / Wave / Safaricom",
      accountName: "Priscilla",
      number: "0717221643",
      extra: "Send via Mobile Transfer",
    },
  };

  const handleCopy = () => {
    // Copy the raw number of the active tab
    navigator.clipboard.writeText(accounts[activeTab].number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donation" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-brand-red font-semibold tracking-wider text-sm uppercase">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 font-serif">
            Your Giving Changes Lives
          </h2>
          <p className="text-slate-600 text-lg">
            Every contribution directly funds our feeding programs, vocational training, 
            and community outreach. Choose your preferred way to support below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT CARD: The "Vault" (Donation Tabs) */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
             
             {/* Tab Header */}
             <div className="flex border-b border-slate-100 bg-slate-50/50">
               {(Object.keys(accounts) as DonationTab[]).map((tab) => (
                 <button
                   key={tab}
                   onClick={() => { setActiveTab(tab); setCopied(false); }}
                   className={cn(
                     "flex-1 py-4 text-sm md:text-base font-semibold flex items-center justify-center gap-2 transition-all",
                     activeTab === tab 
                       ? "bg-white text-navy border-t-2 border-t-brand-green shadow-sm" 
                       : "text-slate-500 hover:text-navy hover:bg-slate-100"
                   )}
                 >
                   {accounts[tab].icon}
                   <span>{accounts[tab].label}</span>
                 </button>
               ))}
             </div>

             {/* Tab Content */}
             <div className="p-8">
               <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-brand-green/10 rounded-full text-brand-green">
                   {activeTab === "MPESA" ? <Smartphone className="w-8 h-8" /> : <Landmark className="w-8 h-8" />}
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-navy">
                     {activeTab === "NGN" ? "Local Bank Transfer" : activeTab === "USD" ? "International Transfer" : "Mobile Money"}
                   </h3>
                   <p className="text-sm text-slate-500">
                     {activeTab === "USD" ? "Donate securely in Dollars" : "Direct & secure transfer"}
                   </p>
                 </div>
               </div>

               <div className="bg-slate-50 rounded-xl p-6 space-y-5 border border-slate-200">
                 
                 {/* Bank Name */}
                 <div>
                   <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Service / Bank Name</p>
                   <p className="text-lg font-bold text-slate-800">{accounts[activeTab].bankName}</p>
                 </div>
                 
                 {/* Account Name */}
                 <div>
                   <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account Name</p>
                   <p className="text-lg font-bold text-slate-800">{accounts[activeTab].accountName}</p>
                 </div>

                 {/* Account Number & Copy */}
                 <div>
                   <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                     {activeTab === "MPESA" ? "Mobile Number" : "Account Number"}
                   </p>
                   <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                     <p className="text-xl md:text-2xl font-mono font-bold text-navy tracking-widest grow">
                       {/* @ts-ignore */}
                       {accounts[activeTab].displayNumber || accounts[activeTab].number}
                     </p>
                     
                     <button 
                       onClick={handleCopy}
                       className="p-2 hover:bg-slate-100 rounded-md transition-colors relative group"
                       title="Copy Number"
                     >
                       {copied ? (
                         <Check className="w-5 h-5 text-green-600" />
                       ) : (
                         <Copy className="w-5 h-5 text-slate-400 group-hover:text-navy" />
                       )}
                     </button>
                   </div>
                 </div>

                 {/* Extra Info (SWIFT or Note) */}
                 {accounts[activeTab].extra && (
                   <div className="pt-2 border-t border-slate-200">
                     <p className="text-sm font-medium text-brand-red flex items-center gap-2">
                       <Globe className="w-4 h-4" />
                       {accounts[activeTab].extra}
                     </p>
                   </div>
                 )}

               </div>
             </div>
          </div>

          {/* RIGHT CARD: Buy Book (Selar) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden flex flex-col h-full">
             {/* Decorative Top Border */}
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-red"></div>

             <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-red-50 rounded-full text-brand-red">
                 <BookOpen className="w-8 h-8" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-navy">Purchase & Support</h3>
                 <p className="text-sm text-slate-500">Get a resource, fuel the mission</p>
               </div>
             </div>

             <p className="text-slate-600 mb-8 grow leading-relaxed">
               Purchase a copy of our latest book, <strong>"Faith-based Community Empowerment Strategies"</strong>. 
               <br /><br />
               This isn't just a book, it's a tool for change. Proceeds from every sale go directly towards funding our outreach to street families and orphans.
             </p>

             <div className="mt-auto space-y-4">
               <Link 
                 href="https://selar.com/945nq2r27v" 
                 target="_blank"
                 className="flex items-center justify-center gap-2 w-full bg-navy hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-xl group"
               >
                 <Heart className="w-5 h-5 text-brand-red fill-current group-hover:scale-110 transition-transform" />
                 <span>Buy Book on Selar</span>
               </Link>
               <p className="text-center text-xs text-slate-400">
                 Secure payment processed via Selar
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}