import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;