import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Sidebar from "@/components/Global/Sidebar";
import Header from "@/components/Header/Header";
import Banner from "@/components/Global/Banner";
import Application from "@/components/Charts/Application";
import ProfileCard from "@/components/Global/ProfileCard";
import ApplicationsTable from "@/components/Tables/ApplicationsTable";
import PropertyCard from "@/components/Global/PropertyCard";
import Inspection from "@/components/Inspection/Inspection";

export default function TenantDashboard() {

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-5 bg-[#F8F9FC]">
                    <Banner
                        imgUrl="/global/banner.png"
                        title="Tenant Dashboard"
                        buttonText="Ready to Rent"
                        buttonUrl="/dashboard"
                    />

                    <main className="flex-1 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Chart Card */}
                        <div className="col-span-2 space-y-6">
                            {/* Chart */}
                            <Application />

                            {/* Applications Table */}
                            <ApplicationsTable />
                            <Inspection />
                        </div>

                        <div className="col-span-1 space-y-6">
                            {/* Profile Card */}
                            <ProfileCard />
                            <div className="bg-white border border-[#DBE0EA] rounded-xl p-5 flex flex-col items-center">
                                <div className="flex justify-between items-center w-full mb-5">
                                    <h3 className="text-lg font-bold text-[#1B254F]">Saved Listing</h3>
                                    <button className="text-[#6B6B6B] border border-[#F2F2F2] px-3.5 py-1.5 rounded-full text-sm font-bold">See more</button>
                                </div>
                                <PropertyCard
                                    imageUrl="/global/property.png"
                                    price="650"
                                    address="503/16 Lonsdale Street, Braddon "
                                    bedrooms="2"
                                    bathrooms="1"
                                    parks="2"
                                    agency="Independent Property Group"
                                    agent="Antoni Francki "
                                    type="Under Offer"
                                    slug="1-property"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
