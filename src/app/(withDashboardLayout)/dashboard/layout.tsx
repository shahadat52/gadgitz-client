import DashBoardSidebar from "@/components/dashboard/DashBoardSidebar";

const Dashboard
    = ({ children }: { children: React.ReactNode }) => {
        return (
            <div className="grid grid-cols-5">
                <div className="col-span-1 bg-gray-400 w-full h-screen">
                    <DashBoardSidebar />
                </div>
                <div className="col-span-4">
                    {children}
                </div>
            </div>
        );
    };

export default Dashboard;
