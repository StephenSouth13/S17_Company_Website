export type Language = "en" | "vi";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    products: string;
    services: string;
    about: string;
    contact: string;
    login: string;
    register: string;
    profile: string;
    cart: string;
    logout: string;
  };

  // Homepage
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      learnMore: string;
    };
    about: {
      title: string;
      description: string;
    };
    featuredProducts: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    services: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    partners: {
      title: string;
    };
    cta: {
      title: string;
      subtitle: string;
      newsletter: string;
      explore: string;
    };
  };

  // Products
  products: {
    title: string;
    searchPlaceholder: string;
    filters: {
      category: string;
      priceRange: string;
      brand: string;
      rating: string;
      sortBy: string;
    };
    sortOptions: {
      newest: string;
      priceAsc: string;
      priceDesc: string;
      rating: string;
      popular: string;
    };
    noResults: string;
    clearFilters: string;
    addToCart: string;
    viewDetails: string;
    inStock: string;
    outOfStock: string;
  };

  // services
  services: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filters: {
      category: string;
      status: string;
    };
    categories: {
      all: string;
      realEstate: string;
      technology: string;
      manufacturing: string;
      energy: string;
      healthcare: string;
      finance: string;
    };
    statuses: {
      all: string;
      active: string;
      completed: string;
      planning: string;
      onHold: string;
    };
    details: {
      investment: string;
      returns: string;
      duration: string;
      location: string;
      investors: string;
      risk: string;
      minInvestment: string;
      progress: string;
      viewDetails: string;
      investNow: string;
      backToservices: string;
      keyFeatures: string;
      financialProjections: string;
      projectTeam: string;
      riskFactors: string;
      projectDetails: string;
      startDate: string;
      endDate: string;
      projectManager: string;
      totalInvestors: string;
      fundingProgress: string;
      raised: string;
      target: string;
    };
    riskLevels: {
      low: string;
      medium: string;
      high: string;
    };
  };

  // Authentication
  auth: {
    login: {
      title: string;
      email: string;
      password: string;
      submit: string;
      forgotPassword: string;
      noAccount: string;
      signUp: string;
      orContinueWith: string;
    };
    register: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      confirmPassword: string;
      submit: string;
      hasAccount: string;
      signIn: string;
      terms: string;
    };
    profile: {
      title: string;
      personalInfo: string;
      orderHistory: string;
      investments: string;
      notifications: string;
      security: string;
      updateProfile: string;
      changePassword: string;
    };
  };

  // Cart & Checkout
  cart: {
    title: string;
    empty: string;
    continueShopping: string;
    quantity: string;
    remove: string;
    subtotal: string;
    tax: string;
    shipping: string;
    total: string;
    // The `checkout` key is now an object, no longer a string
    checkout: {
      title: string;
      shippingInfo: string;
      paymentMethod: string;
      orderSummary: string;
      placeOrder: string;
      firstName: string;
      lastName: string;
      address: string;
      city: string;
      postalCode: string;
      phone: string;
      cardNumber: string;
      expiryDate: string;
      cvv: string;
      orderSuccess: string;
      orderNumber: string;
    };
  };

  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    confirm: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    sort: string;
    grid: string;
    list: string;
    viewMore: string;
    readMore: string;
    contactUs: string;
    getStarted: string;
    learnMore: string;
    subscribe: string;
    email: string;
    phone: string;
    address: string;
    followUs: string;
    copyright: string;
  };

  // Footer
  footer: {
    company: {
      title: string;
      about: string;
      careers: string;
      news: string;
      contact: string;
    };
    products: {
      title: string;
      catalog: string;
      newArrivals: string;
      bestsellers: string;
      deals: string;
    };
    support: {
      title: string;
      help: string;
      shipping: string;
      returns: string;
      faq: string;
    };
    legal: {
      title: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      services: "services",
      about: "About",
      contact: "Contact",
      login: "Login",
      register: "Register",
      profile: "Profile",
      cart: "Cart",
      logout: "Logout",
    },
    home: {
      hero: {
        title: "Welcome to S17 Trading",
        subtitle: "Your trusted partner in premium products and investment opportunities",
        cta: "Explore Products",
        learnMore: "Learn More",
      },
      about: {
        title: "About S17 Trading",
        description:
          "We are a leading company specializing in premium products and innovative investment services, committed to delivering excellence and creating value for our partners and investors.",
      },
      featuredProducts: {
        title: "Featured Products",
        subtitle: "Discover our carefully curated selection of premium products",
        viewAll: "View All Products",
      },
      services: {
        title: "Investment services",
        subtitle: "Explore our diverse portfolio of successful investment opportunities",
        viewAll: "View All services",
      },
      partners: {
        title: "Our Trusted Partners",
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Join thousands of satisfied customers and investors",
        newsletter: "Subscribe to Newsletter",
        explore: "Explore services",
      },
    },
    products: {
      title: "Products",
      searchPlaceholder: "Search products...",
      filters: {
        category: "Category",
        priceRange: "Price Range",
        brand: "Brand",
        rating: "Rating",
        sortBy: "Sort By",
      },
      sortOptions: {
        newest: "Newest",
        priceAsc: "Price: Low to High",
        priceDesc: "Price: High to Low",
        rating: "Highest Rated",
        popular: "Most Popular",
      },
      noResults: "No products found matching your criteria.",
      clearFilters: "Clear Filters",
      addToCart: "Add to Cart",
      viewDetails: "View Details",
      inStock: "In Stock",
      outOfStock: "Out of Stock",
    },
    services: {
      title: "Investment services",
      subtitle:
        "Explore our diverse portfolio of successful investment services and discover opportunities that align with your financial goals and risk tolerance.",
      searchPlaceholder: "Search services...",
      filters: {
        category: "Category",
        status: "Status",
      },
      categories: {
        all: "All services",
        realEstate: "Real Estate",
        technology: "Technology",
        manufacturing: "Manufacturing",
        energy: "Energy",
        healthcare: "Healthcare",
        finance: "Finance",
      },
      statuses: {
        all: "All Status",
        active: "Active",
        completed: "Completed",
        planning: "Planning",
        onHold: "On Hold",
      },
      details: {
        investment: "Investment",
        returns: "Returns",
        duration: "Duration",
        location: "Location",
        investors: "investors",
        risk: "Risk",
        minInvestment: "Min. Investment",
        progress: "Progress",
        viewDetails: "View Details",
        investNow: "Invest Now",
        backToservices: "Back to services",
        keyFeatures: "Key Features",
        financialProjections: "Financial Projections",
        projectTeam: "Project Team",
        riskFactors: "Risk Factors",
        projectDetails: "Project Details",
        startDate: "Start Date",
        endDate: "End Date",
        projectManager: "Project Manager",
        totalInvestors: "Total Investors",
        fundingProgress: "Funding Progress",
        raised: "Raised",
        target: "Target",
      },
      riskLevels: {
        low: "Low",
        medium: "Medium",
        high: "High",
      },
    },
    auth: {
      login: {
        title: "Welcome Back",
        email: "Email Address",
        password: "Password",
        submit: "Sign In",
        forgotPassword: "Forgot Password?",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        orContinueWith: "Or continue with",
      },
      register: {
        title: "Create Account",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        password: "Password",
        confirmPassword: "Confirm Password",
        submit: "Create Account",
        hasAccount: "Already have an account?",
        signIn: "Sign In",
        terms: "I agree to the Terms of Service and Privacy Policy",
      },
      profile: {
        title: "My Profile",
        personalInfo: "Personal Information",
        orderHistory: "Order History",
        investments: "My Investments",
        notifications: "Notifications",
        security: "Security",
        updateProfile: "Update Profile",
        changePassword: "Change Password",
      },
    },
    cart: {
      title: "Shopping Cart",
      empty: "Your cart is empty",
      continueShopping: "Continue Shopping",
      quantity: "Quantity",
      remove: "Remove",
      subtotal: "Subtotal",
      tax: "Tax",
      shipping: "Shipping",
      total: "Total",
      // This `checkout` key is no longer a string and is now correctly nested
      checkout: {
        title: "Checkout",
        shippingInfo: "Shipping Information",
        paymentMethod: "Payment Method",
        orderSummary: "Order Summary",
        placeOrder: "Place Order",
        firstName: "First Name",
        lastName: "Last Name",
        address: "Address",
        city: "City",
        postalCode: "Postal Code",
        phone: "Phone Number",
        cardNumber: "Card Number",
        expiryDate: "Expiry Date",
        cvv: "CVV",
        orderSuccess: "Order Placed Successfully!",
        orderNumber: "Order Number",
      },
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
      back: "Back",
      next: "Next",
      previous: "Previous",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      grid: "Grid",
      list: "List",
      viewMore: "View More",
      readMore: "Read More",
      contactUs: "Contact Us",
      getStarted: "Get Started",
      learnMore: "Learn More",
      subscribe: "Subscribe",
      email: "Email",
      phone: "Phone",
      address: "Address",
      followUs: "Follow Us",
      copyright: "© 2024 S17 Trading. All rights reserved.",
    },
    footer: {
      company: {
        title: "Company",
        about: "About Us",
        careers: "Careers",
        news: "News",
        contact: "Contact",
      },
      products: {
        title: "Products",
        catalog: "Product Catalog",
        newArrivals: "New Arrivals",
        bestsellers: "Bestsellers",
        deals: "Special Deals",
      },
      support: {
        title: "Support",
        help: "Help Center",
        shipping: "Shipping Info",
        returns: "Returns",
        faq: "FAQ",
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
      },
    },
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      products: "Sản Phẩm",
      services: "Dịch Vụ",
      about: "Giới Thiệu",
      contact: "Liên Hệ",
      login: "Đăng Nhập",
      register: "Đăng Ký",
      profile: "Hồ Sơ",
      cart: "Giỏ Hàng",
      logout: "Đăng Xuất",
    },
    home: {
      hero: {
        title: "Chào Mừng Đến Với S17 Trading",
        subtitle: "Đối tác tin cậy trong các sản phẩm cao cấp và cơ hội đầu tư",
        cta: "Khám Phá Sản Phẩm",
        learnMore: "Tìm Hiểu Thêm",
      },
      about: {
        title: "Về S17 Trading",
        description:
          "Chúng tôi là công ty hàng đầu chuyên về các sản phẩm cao cấp và các Dịch Vụ đầu tư sáng tạo, cam kết mang lại sự xuất sắc và tạo ra giá trị cho các đối tác và nhà đầu tư.",
      },
      featuredProducts: {
        title: "Sản Phẩm Nổi Bật",
        subtitle: "Khám phá bộ sưu tập sản phẩm cao cấp được tuyển chọn kỹ lưỡng",
        viewAll: "Xem Tất Cả Sản Phẩm",
      },
      services: {
        title: "Dịch Vụ Đầu Tư",
        subtitle: "Khám phá danh mục đa dạng các cơ hội đầu tư thành công của chúng tôi",
        viewAll: "Xem Tất Cả Dịch Vụ",
      },
      partners: {
        title: "Đối Tác Tin Cậy",
      },
      cta: {
        title: "Sẵn Sàng Bắt Đầu?",
        subtitle: "Tham gia cùng hàng nghìn khách hàng và nhà đầu tư hài lòng",
        newsletter: "Đăng Ký Nhận Tin",
        explore: "Khám Phá Dịch Vụ",
      },
    },
    products: {
      title: "Sản Phẩm",
      searchPlaceholder: "Tìm kiếm sản phẩm...",
      filters: {
        category: "Danh Mục",
        priceRange: "Khoảng Giá",
        brand: "Thương Hiệu",
        rating: "Đánh Giá",
        sortBy: "Sắp Xếp Theo",
      },
      sortOptions: {
        newest: "Mới Nhất",
        priceAsc: "Giá: Thấp đến Cao",
        priceDesc: "Giá: Cao đến Thấp",
        rating: "Đánh Giá Cao Nhất",
        popular: "Phổ Biến Nhất",
      },
      noResults: "Không tìm thấy sản phẩm phù hợp với tiêu chí của bạn.",
      clearFilters: "Xóa Bộ Lọc",
      addToCart: "Thêm Vào Giỏ",
      viewDetails: "Xem Chi Tiết",
      inStock: "Còn Hàng",
      outOfStock: "Hết Hàng",
    },
    services: {
      title: "Dịch Vụ Đầu Tư",
      subtitle:
        "Khám phá danh mục đa dạng các Dịch Vụ đầu tư thành công và tìm hiểu các cơ hội phù hợp với mục tiêu tài chính và mức độ rủi ro của bạn.",
      searchPlaceholder: "Tìm kiếm Dịch Vụ...",
      filters: {
        category: "Danh Mục",
        status: "Trạng Thái",
      },
      categories: {
        all: "Tất Cả Dịch Vụ",
        realEstate: "Bất Động Sản",
        technology: "Công Nghệ",
        manufacturing: "Sản Xuất",
        energy: "Năng Lượng",
        healthcare: "Y Tế",
        finance: "Tài Chính",
      },
      statuses: {
        all: "Tất Cả Trạng Thái",
        active: "Đang Hoạt Động",
        completed: "Hoàn Thành",
        planning: "Đang Lên Kế Hoạch",
        onHold: "Tạm Dừng",
      },
      details: {
        investment: "Đầu Tư",
        returns: "Lợi Nhuận",
        duration: "Thời Gian",
        location: "Địa Điểm",
        investors: "nhà đầu tư",
        risk: "Rủi Ro",
        minInvestment: "Đầu Tư Tối Thiểu",
        progress: "Tiến Độ",
        viewDetails: "Xem Chi Tiết",
        investNow: "Đầu Tư Ngay",
        backToservices: "Quay Lại Dịch Vụ",
        keyFeatures: "Tính Năng Chính",
        financialProjections: "Dự Báo Tài Chính",
        projectTeam: "Đội Ngũ Dịch Vụ",
        riskFactors: "Yếu Tố Rủi Ro",
        projectDetails: "Chi Tiết Dịch Vụ",
        startDate: "Ngày Bắt Đầu",
        endDate: "Ngày Kết Thúc",
        projectManager: "Quản Lý Dịch Vụ",
        totalInvestors: "Tổng Số Nhà Đầu Tư",
        fundingProgress: "Tiến Độ Gây Quỹ",
        raised: "Đã Huy Động",
        target: "Mục Tiêu",
      },
      riskLevels: {
        low: "Thấp",
        medium: "Trung Bình",
        high: "Cao",
      },
    },
    auth: {
      login: {
        title: "Chào Mừng Trở Lại",
        email: "Địa Chỉ Email",
        password: "Mật Khẩu",
        submit: "Đăng Nhập",
        forgotPassword: "Quên Mật Khẩu?",
        noAccount: "Chưa có tài khoản?",
        signUp: "Đăng Ký",
        orContinueWith: "Hoặc tiếp tục với",
      },
      register: {
        title: "Tạo Tài Khoản",
        firstName: "Họ",
        lastName: "Tên",
        email: "Địa Chỉ Email",
        password: "Mật Khẩu",
        confirmPassword: "Xác Nhận Mật Khẩu",
        submit: "Tạo Tài Khoản",
        hasAccount: "Đã có tài khoản?",
        signIn: "Đăng Nhập",
        terms: "Tôi đồng ý với Điều Khoản Dịch Vụ và Chính Sách Bảo Mật",
      },
      profile: {
        title: "Hồ Sơ Của Tôi",
        personalInfo: "Thông Tin Cá Nhân",
        orderHistory: "Lịch Sử Đơn Hàng",
        investments: "Đầu Tư Của Tôi",
        notifications: "Thông Báo",
        security: "Bảo Mật",
        updateProfile: "Cập Nhật Hồ Sơ",
        changePassword: "Đổi Mật Khẩu",
      },
    },
    cart: {
      title: "Giỏ Hàng",
      empty: "Giỏ hàng của bạn đang trống",
      continueShopping: "Tiếp Tục Mua Sắm",
      quantity: "Số Lượng",
      remove: "Xóa",
      subtotal: "Tạm Tính",
      tax: "Thuế",
      shipping: "Phí Vận Chuyển",
      total: "Tổng Cộng",
      // This `checkout` key is no longer a string and is now correctly nested
      checkout: {
        title: "Thanh Toán",
        shippingInfo: "Thông Tin Giao Hàng",
        paymentMethod: "Phương Thức Thanh Toán",
        orderSummary: "Tóm Tắt Đơn Hàng",
        placeOrder: "Đặt Hàng",
        firstName: "Họ",
        lastName: "Tên",
        address: "Địa Chỉ",
        city: "Thành Phố",
        postalCode: "Mã Bưu Điện",
        phone: "Số Điện Thoại",
        cardNumber: "Số Thẻ",
        expiryDate: "Ngày Hết Hạn",
        cvv: "CVV",
        orderSuccess: "Đặt Hàng Thành Công!",
        orderNumber: "Số Đơn Hàng",
      },
    },
    common: {
      loading: "Đang tải...",
      error: "Đã xảy ra lỗi",
      success: "Thành công",
      cancel: "Hủy",
      save: "Lưu",
      edit: "Chỉnh sửa",
      delete: "Xóa",
      confirm: "Xác nhận",
      back: "Quay lại",
      next: "Tiếp theo",
      previous: "Trước",
      search: "Tìm kiếm",
      filter: "Lọc",
      sort: "Sắp xếp",
      grid: "Lưới",
      list: "Danh sách",
      viewMore: "Xem thêm",
      readMore: "Đọc thêm",
      contactUs: "Liên hệ",
      getStarted: "Bắt đầu",
      learnMore: "Tìm hiểu thêm",
      subscribe: "Đăng ký",
      email: "Email",
      phone: "Điện thoại",
      address: "Địa chỉ",
      followUs: "Theo dõi chúng tôi",
      copyright: "© 2024 S17 Trading. Tất cả quyền được bảo lưu.",
    },
    footer: {
      company: {
        title: "Công Ty",
        about: "Về Chúng Tôi",
        careers: "Tuyển Dụng",
        news: "Tin Tức",
        contact: "Liên Hệ",
      },
      products: {
        title: "Sản Phẩm",
        catalog: "Danh Mục Sản Phẩm",
        newArrivals: "Hàng Mới Về",
        bestsellers: "Bán Chạy Nhất",
        deals: "Ưu Đãi Đặc Biệt",
      },
      support: {
        title: "Hỗ Trợ",
        help: "Trung Tâm Trợ Giúp",
        shipping: "Thông Tin Vận Chuyển",
        returns: "Đổi Trả",
        faq: "Câu Hỏi Thường Gặp",
      },
      legal: {
        title: "Pháp Lý",
        privacy: "Chính Sách Bảo Mật",
        terms: "Điều Khoản Dịch Vụ",
        cookies: "Chính Sách Cookie",
      },
    },
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language] || translations.en;
}