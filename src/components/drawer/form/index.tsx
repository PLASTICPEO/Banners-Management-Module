import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";

import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useRef, useState } from "react";
import { useGetBlobs } from "../../../api/blobs";
import UploadBannerImage from "../upload";
import { useMutation } from "react-query";

const { RangePicker } = DatePicker;
const { Option } = Select;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormToAddABanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { data: blob } = useGetBlobs(selectedImage, {
    enabled: !!selectedImage,
  });
  const [form] = useForm();

  // useEffect(() => {
  //   console.log(blob);
  // }, [blob]);

  const uploadImage = async (formData: any) => {
    console.log(formData, "ფორმდატა");
    setSelectedImage(formData);
  };

  const { mutate } = useMutation(uploadImage);

  const handleImageChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.set("blob", selectedImage);

      // Use React Query's mutate function to send the FormData
      mutate(formData);
    }
  };

  const handleAddBanner = (e: any) => {
    // Extract the start and end dates as JavaScript Date objects
    // const startDate = e.data[0].format("YYYY-MM-DD HH:mm:ss"); // Start date
    // const endDate = e.data[1].format("YYYY-MM-DD HH:mm:ss"); // End date
    // const newBanner = {
    //   name: e.name,
    //   channelId: e.channelId,
    //   language: e.language,
    //   zoneId: e.zoneId,
    //   priority: e.priority,
    //   fileId: "",
    //   url: e.url,
    //   startDate: startDate,
    //   endDate: endDate,
    //   active: true,
    // };
  };

  return (
    <>
      <Form
        form={form}
        onFinish={async (e) => {
          handleSubmit(e);
          form.resetFields();
        }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        {/* <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please select name!" }]}
        >
          <Input placeholder="Enter banner name" />
        </Form.Item>
        <Form.Item
          name="url"
          label="Url"
          rules={[{ required: true, message: "Please select url!" }]}
        >
          <Input placeholder="Enter URL" />
        </Form.Item>
        <Form.Item
          name="channelId"
          label="Channel"
          rules={[{ required: true, message: "Please select channel!" }]}
        >
          <Select placeholder="Select channel">
            <Option value="channel1">channel 1</Option>
            <Option value="channel2">channel 2</Option>
            <Option value="channel3">channel 3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Language" name="language" valuePropName="checked">
          <Select placeholder="Select language">
            <Option value="header">ქართული</Option>
            <Option value="footer">English</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="zoneId"
          label="Zone"
          rules={[{ required: true, message: "Please select Zone!" }]}
        >
          <Select placeholder="Select zone">
            <Option value="header">Header</Option>
            <Option value="footer">Footer</Option>
            <Option value="right sidebar">Side</Option>
            <Option value="main Hero">Main Hero</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="data"
          label="Data range"
          rules={[{ required: true, message: "Please select Zone!" }]}
        >
          <RangePicker format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true, message: "Set a priority!" }]}
        >
          <InputNumber min={0} placeholder="0" />
        </Form.Item> */}
        {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}

        <div className="flex items-center justify-center">
          <Button htmlType="submit">შექმნა</Button>
        </div>
      </Form>
      <UploadBannerImage />
    </>
  );
};

export default FormToAddABanner;
