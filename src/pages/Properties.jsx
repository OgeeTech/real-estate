import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Users,
  TrendingUp,
  Star,
  Heart,
  Share2,
  ChevronDown,
  SlidersHorizontal,
  X,
  Clock,
  DollarSign,
} from "lucide-react";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
    minSqm: "1200",
    ownership: "",
    status: "available",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call
  const mockProperties = [
    {
      id: 1,
      title: "Luxury Duplex – Lekki Phase 1",
      location: "Lekki Phase 1, Lagos",
      price: 120000000,
      minInvestment: 500000,
      sqm: 1500,
      bedrooms: 5,
      bathrooms: 5,
      fundingProgress: 72,
      targetROI: "18-22%",
      type: "villa",
      status: "funding",
      featured: true,
      rating: 4.8,
      investors: 26,
      image: "/img/1.jpeg",
      tags: ["Prime Area", "1200+ sqm", "Secure Estate"],
    },
    {
      id: 2,
      title: "Waterfront Apartments – Banana Island",
      location: "Banana Island, Lagos",
      price: 350000000,
      minInvestment: 1000000,
      sqm: 1800,
      bedrooms: 4,
      bathrooms: 4,
      fundingProgress: 90,
      targetROI: "20-25%",
      type: "penthouse",
      status: "almost",
      featured: true,
      rating: 4.9,
      investors: 34,
      image: "/img/7.jpeg",
      tags: ["Waterfront", "Luxury", "High ROI"],
    },
    {
      id: 3,
      title: "Smart Estate – Maitama",
      location: "Maitama, Abuja",
      price: 200000000,
      minInvestment: 700000,
      sqm: 2000,
      bedrooms: 6,
      bathrooms: 6,
      fundingProgress: 45,
      targetROI: "17-21%",
      type: "estate",
      status: "available",
      featured: false,
      rating: 4.7,
      investors: 21,
      image: "/img/3.jpeg",
      tags: ["Smart Home", "Secure", "Capital City"],
    },
    {
      id: 4,
      title: "Ikoyi Grand Towers – Ikoyi",
      location: "Ikoyi, Lagos",
      price: 280000000,
      minInvestment: 800000,
      sqm: 1600,
      bedrooms: 3,
      bathrooms: 4,
      fundingProgress: 60,
      targetROI: "19-23%",
      type: "apartment",
      status: "funding",
      featured: true,
      rating: 4.6,
      investors: 28,
      image: "/img/4.jpeg",
      tags: ["High-rise", "Premium", "City View"],
    },
    {
      id: 5,
      title: "Eko Atlantic Villa – Eko Atlantic",
      location: "Eko Atlantic, Lagos",
      price: 400000000,
      minInvestment: 1500000,
      sqm: 2000,
      bedrooms: 6,
      bathrooms: 6,
      fundingProgress: 88,
      targetROI: "22-27%",
      type: "villa",
      status: "almost",
      featured: true,
      rating: 5.0,
      investors: 42,
      image: "/img/7.jpeg",
      tags: ["Ocean View", "Exclusive", "New Development"],
    },
    {
      id: 6,
      title: "Luxury Retreat – Calabar",
      location: "Calabar, Cross River",
      price: 150000000,
      minInvestment: 600000,
      sqm: 2500,
      bedrooms: 4,
      bathrooms: 5,
      fundingProgress: 30,
      targetROI: "16-20%",
      type: "retreat",
      status: "available",
      featured: false,
      rating: 4.5,
      investors: 15,
      image: "/img/8.jpeg",
      tags: ["Smart Home", "Secure", "Capital City"],
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProperties(mockProperties);
      setFilteredProperties(mockProperties);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const applyFilters = () => {
    let filtered = [...properties];

    // Location filter
    if (filters.location) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Price range filter
    if (filters.minPrice) {
      filtered = filtered.filter((p) => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((p) => p.price <= parseInt(filters.maxPrice));
    }

    // Property type filter
    if (filters.propertyType) {
      filtered = filtered.filter((p) => p.type === filters.propertyType);
    }

    // Minimum sqm filter (1200+ from your requirements)
    filtered = filtered.filter((p) => p.sqm >= parseInt(filters.minSqm));

    // Status filter
    if (filters.status) {
      filtered = filtered.filter((p) => p.status === filters.status);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "progress":
        filtered.sort((a, b) => b.fundingProgress - a.fundingProgress);
        break;
      case "roi":
        filtered.sort((a, b) => {
          const aRoi = parseInt(a.targetROI.split("-")[0]);
          const bRoi = parseInt(b.targetROI.split("-")[0]);
          return bRoi - aRoi;
        });
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProperties(filtered);
  };

  const propertyTypes = [
    { value: "", label: "All Types" },
    { value: "villa", label: "Villas" },
    { value: "penthouse", label: "Penthouses" },
    { value: "estate", label: "Estates" },
    { value: "loft", label: "Lofts" },
    { value: "retreat", label: "Retreats" },
    { value: "beach", label: "Beach Houses" },
  ];

  const statusOptions = [
    { value: "available", label: "Available", color: "text-green-500" },
    { value: "funding", label: "Funding", color: "text-blue-500" },
    { value: "almost", label: "Almost Funded", color: "text-amber-500" },
  ];

  const PropertyCard = ({ property }) => (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 bg-slate-100 dark:bg-slate-800">
        {/* Placeholder image block */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Status */}
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
            property.status === "funding"
              ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              : property.status === "almost"
              ? "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
              : "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400"
          }`}
        >
          {property.status === "almost"
            ? "Almost Funded"
            : property.status === "funding"
            ? "Funding"
            : "Available"}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mt-1">
            <MapPin size={14} />
            {property.location}
          </div>
        </div>

        {/* Specs */}
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.sqm.toLocaleString()} sqm</span>
        </div>

        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-500">
            <span>{property.fundingProgress}% funded</span>
            <span>{property.investors} investors</span>
          </div>
          <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-700"
              style={{ width: `${property.fundingProgress}%` }}
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-between items-end pt-3 border-t border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-xs text-slate-500">Min. Investment</p>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              ₦{property.minInvestment.toLocaleString()}
            </p>
          </div>

          <button className="px-4 py-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            View
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="properties"
      className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/20 dark:to-slate-950"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-slate-900 dark:text-white">
                Premium Properties
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Ready for Investment
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Discover curated real estate opportunities starting from 1200sqm+.
              Invest alongside verified partners with transparent group
              ownership.
            </p>
          </div>

          {/* Search & Stats Bar */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by location, property name, or feature..."
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  ₦50M+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Total Portfolio
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  500+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Active Investors
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  15-25%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Avg. ROI
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  1200+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Minimum Sqm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Properties Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters Bar */}
          <div className="sticky top-24 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-800/50 p-4 mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                    showFilters
                      ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <SlidersHorizontal size={18} />
                  <span className="font-medium">Filters</span>
                  {showFilters ? <X size={16} /> : <ChevronDown size={16} />}
                </button>

                <div className="hidden md:flex items-center gap-2">
                  <Filter size={16} className="text-slate-400" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {filteredProperties.length} properties found
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-600 dark:text-slate-400">
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border-none text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-0"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="progress">Funding Progress</option>
                    <option value="roi">Highest ROI</option>
                  </select>
                </div>

                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-white dark:bg-slate-900 shadow-sm"
                        : ""
                    }`}
                  >
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-sm ${
                            viewMode === "grid" ? "bg-blue-500" : "bg-slate-400"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-white dark:bg-slate-900 shadow-sm"
                        : ""
                    }`}
                  >
                    <div className="w-4 h-4 space-y-0.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-full h-0.5 rounded-sm ${
                            viewMode === "list" ? "bg-blue-500" : "bg-slate-400"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Property Type
                    </label>
                    <select
                      value={filters.propertyType}
                      onChange={(e) =>
                        setFilters({ ...filters, propertyType: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white"
                    >
                      {propertyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Price Range
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={(e) =>
                          setFilters({ ...filters, minPrice: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={(e) =>
                          setFilters({ ...filters, maxPrice: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Minimum Sqm
                    </label>
                    <select
                      value={filters.minSqm}
                      onChange={(e) =>
                        setFilters({ ...filters, minSqm: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white"
                    >
                      <option value="1200">1200+ sqm</option>
                      <option value="1500">1500+ sqm</option>
                      <option value="2000">2000+ sqm</option>
                      <option value="2500">2500+ sqm</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Status
                    </label>
                    <div className="flex gap-2">
                      {statusOptions.map((status) => (
                        <button
                          key={status.value}
                          onClick={() =>
                            setFilters({ ...filters, status: status.value })
                          }
                          className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                            filters.status === status.value
                              ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {status.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() =>
                      setFilters({
                        location: "",
                        minPrice: "",
                        maxPrice: "",
                        propertyType: "",
                        minSqm: "1200",
                        ownership: "",
                        status: "available",
                      })
                    }
                    className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Properties Grid */}
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl h-[500px]"></div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-8"
              }
            >
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          {/* No Results State */}
          {!loading && filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <Search size={40} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                No properties found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
                Try adjusting your filters or search terms to find what you're
                looking for.
              </p>
              <button
                onClick={() =>
                  setFilters({
                    location: "",
                    minPrice: "",
                    maxPrice: "",
                    propertyType: "",
                    minSqm: "1200",
                    ownership: "",
                    status: "available",
                  })
                }
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
