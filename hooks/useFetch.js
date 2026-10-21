const { useState, useEffect, useCallback } = React;

const DEFAULT_STUDENTS_MOCK = [
  {
    id: "SV01",
    name: "Nguyễn Văn An",
    dob: "2003-05-15",
    email: "an.nv@student.edu.vn",
    major: "Công nghệ thông tin",
    gpa: 3.6
  },
  {
    id: "SV02",
    name: "Trần Thị Bích",
    dob: "2003-08-20",
    email: "bich.tt@student.edu.vn",
    major: "Khoa học máy tính",
    gpa: 3.85
  },
  {
    id: "SV03",
    name: "Lê Hoàng Long",
    dob: "2002-11-03",
    email: "long.lh@student.edu.vn",
    major: "Hệ thống thông tin",
    gpa: 2.7
  },
  {
    id: "SV04",
    name: "Phạm Minh Tuấn",
    dob: "2003-02-18",
    email: "tuan.pm@student.edu.vn",
    major: "Kỹ thuật phần mềm",
    gpa: 1.8
  }
];

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    const localSaved = localStorage.getItem("students_hooks_db");

    try {
      if (url && url.startsWith("http")) {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        localStorage.setItem("students_hooks_db", JSON.stringify(json));
      } else {
        await new Promise((resolve) => setTimeout(resolve, 400));
        const initial = localSaved ? JSON.parse(localSaved) : DEFAULT_STUDENTS_MOCK;
        setData(initial);
      }
    } catch (err) {
      console.warn("Lỗi fetch MockAPI (dùng dữ liệu offline):", err.message);
      const fallback = localSaved ? JSON.parse(localSaved) : DEFAULT_STUDENTS_MOCK;
      setData(fallback);
      setError("Không thể kết nối đến MockAPI trực tuyến. Ứng dụng tự động chuyển sang chế độ dữ liệu offline.");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateData = (newDataOrUpdater) => {
    setData((prev) => {
      const updated = typeof newDataOrUpdater === "function" ? newDataOrUpdater(prev) : newDataOrUpdater;
      localStorage.setItem("students_hooks_db", JSON.stringify(updated));
      return updated;
    });
  };

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    setData: updateData
  };
};
