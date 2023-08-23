
import Hero from "@/app/components/home/Hero";
import getPostNewest from "@/app/utils/get-post-newest";

const AboutPage = async () => {
  const data = await getPostNewest();
  return (
    <div>
      
      <div className="text-center p-5 m-5 bg-green-400">
      <h1>This is About page with 2 section + header & footer section</h1>
        </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
     
   
    </div>
  );
};

export default AboutPage;
