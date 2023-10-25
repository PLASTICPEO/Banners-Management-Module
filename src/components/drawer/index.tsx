import React, { useState } from "react";
import { Button, ConfigProvider, Drawer } from "antd";
import FormToAddABanner from "./form";

const BannerDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="my-10">
      <Button onClick={showDrawer}>+ ბანერის დამატება</Button>

      <Drawer
        title="ბანერის დამატება"
        size="large"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <FormToAddABanner />
      </Drawer>
    </div>
  );
};

export default BannerDrawer;
