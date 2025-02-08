import { memo, useEffect, useState } from "react";

/**
 * NOTE:
 * - Không bọc memo ở `Child`: Khi component cha, có state, props thay đổi sẽ trigger re-render cho tất cả các component con.
 * - Bọc memo ở `Child`: Khi component cha, có state, props thay đổi, chỉ trigger re-render cho các component con có props thay đổi.
 * - useEffect [item.value]: log giá trị cùng với giai đoạn mounting(empty deps)
 * và khi giá trị của item thực sự thay đổi đổi với kiểu dữ liệu không tham chiếu. với kiểu dữ liệu tham chiếu luôn log khi tham chiếu thay đổi
 */

const Child = memo(
  ({ item }: { item: { id: number; value: string | object } }) => {
    // Log mỗi khi component render
    console.log(`Render Child: key=${item.id}, value=${item.value}`);

    // Chỉ chạy một lần khi component được mount, và cleanup khi unmount
    useEffect(() => {
      console.log(`Child Mounted: key=${item.id}, value=${item.value}`);
      return () => {
        console.log(`Child Unmounted: key=${item.id}`);
      };
    }, []);

    // Log khi giá trị của item thay đổi (chỉ log cho item có key thay đổi value)
    useEffect(() => {
      console.log(`Child Updated: key=${item.id}, new value=${item.value}`);
    }, [item.value]);

    return (
      <div style={{ border: "1px solid #ccc", margin: "5px", padding: "5px" }}>
        <p>
          <strong>Item {item.id}:</strong>{" "}
          {typeof item.value === "object"
            ? JSON.stringify(item.value)
            : item.value}
        </p>
      </div>
    );
  }
);

function IssueTwo() {
  const [items, setItems] = useState([
    { id: 1, value: "Item 1" },
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" },
    { id: 4, value: "Item 4" },
    { id: 5, value: "Item 5" },
  ]);

  // Hàm cập nhật item có id=5 (key=5)
  const updateItem5 = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === 5 ? { ...item, value: 55555 } : item
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách các Item</h1>
      <button onClick={updateItem5}>Cập nhật Item 5</button>
      {items.map((item) => (
        // Sử dụng item.id làm key
        <Child key={item.id} item={item} />
      ))}
    </div>
  );
}

export default IssueTwo;
