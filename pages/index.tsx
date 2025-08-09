import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import Button from "@/components/common/Button";
import { HERO_BACKGROUND, PROPERTYLISTINGSAMPLE } from "@/constants";
import { url } from "inspector";

export default function Home() {
  const filters = [
    "Top Trip",
    "Free Reservation",
    "Book Now Pay Later",
    "Self Checkin",
    "Nearest Beach",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-24 text-center text-white relative"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-4 text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="my-6 flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <Card key={property.name} property={property} />
        ))}
      </section>

      {/* Show More Button */}
      <div className="text-center my-8">
        <Button
          label="Show more"
          styles="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        />
        <p className="text-xs text-gray-500 mt-2">Click to view more listings</p>
      </div>
    </Layout>
  );
}
