import { UploadOutlined } from "@ant-design/icons";

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
import { usePostBlobs } from "../../../api/blobs/upload";
import { useBannersSave } from "../../../api/bannersSave";

const { RangePicker } = DatePicker;
const { Option } = Select;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.name;
};

const FormToAddABanner: React.FC = () => {
  const [blobID, setBlobID]: any = useState(null);
  const [uploadValue, setUploadValue]: any = useState(null);

  const { mutate, data: success }: any = usePostBlobs();
  const { mutate: bannersSave, data: response } = useBannersSave();
  const [form] = useForm();

  useEffect(() => {
    console.log(response, "ფორმაში");
  }, [response]);

  const uploadImage = (formData: any) => {
    mutate(formData);
  };

  useEffect(() => {
    setBlobID(success?.data?.data.id);
  }, [blobID, success]);

  const handleImageChange = (info: any) => {
    const selectedImg = info.file;

    if (selectedImg) {
      const formData = new FormData();
      formData.set("blob", selectedImg);

      uploadImage(formData);
    }
    if (info) {
      setUploadValue(info.file.name);
    } else {
      setUploadValue(null); // Clear the selected file when removed
    }
  };

  const handleAddBanner = async (e: any) => {
    // Extract the start and end dates as JavaScript Date objects
    const startDate = e.data[0].format("YYYY-MM-DD HH:mm:ss"); // Start date
    const endDate = e.data[1].format("YYYY-MM-DD HH:mm:ss"); // End date

    const bannerObj = {
      name: e.name,
      channelId: e.channelId,
      language: e.language,
      zoneId: e.zoneId,
      fileId: blobID,
      priority: e.priority,
      url: e.url,
      startDate: startDate,
      endDate: endDate,
      active: true,
    };
    setUploadValue(null);
    bannersSave(bannerObj);
  };

  return (
    <>
      <Form
        form={form}
        onFinish={async (e) => {
          handleAddBanner(e);
          form.resetFields();
        }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item
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
            <Option value="ქართული">ქართული</Option>
            <Option value="english">English</Option>
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
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          // getValueFromEvent={normFile}
          getValueFromEvent={normFile}
          // rules={[{ required: true, message: "upload photo !" }]}
        >
          {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}

          <Upload
            customRequest={handleImageChange}
            listType="picture"
            accept="image/*"
            maxCount={1}
            fileList={uploadValue ? [{ uid: "1", name: uploadValue }] : []}

            // defaultFileList={[...uploadValue]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <div className="flex items-center justify-center">
          <Button htmlType="submit">შექმნა</Button>
        </div>
      </Form>
    </>
  );
};

export default FormToAddABanner;
