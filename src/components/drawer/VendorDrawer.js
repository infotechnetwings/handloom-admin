import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { Textarea, Select } from '@windmill/react-ui';
import ReactTagInput from '@pathofdev/react-tag-input';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import InputValue from '../form/InputValue';
import SelectOption from '../form/SelectOption';
import DrawerButton from '../form/DrawerButton';
import Uploader from '../image-uploader/Uploader';
import ChildrenCategory from '../category/ChildrenCategory';
import ParentCategory from '../category/ParentCategory';
import useVendorSubmit from '../../hooks/useVendorSubmit';

const VendorDrawer = ({ id }) => {
  const {
    register,
    watch,
    handleSubmit,
    onSubmit,
    errors,
    tag,
    setTag,
  } = useVendorSubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Vendor"
            description="Updated your Vendor and necessary information from here"
          />
        ) : (
          <Title
            title="Add Vendor"
            description="Add your Vendor and necessary information from here"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Vendor Name" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Vendor Name"
                  name="vendor-name"
                  type="text"
                  placeholder="Name"
                />
                <Error errorName={errors.name} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Location" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Vendor location"
                  name="vendor-location"
                  type="text"
                  placeholder="Vendor Location"
                />
                <Error errorName={errors.location} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Vendor Description" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  className="border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                  {...register('description', {
                    required: 'Description is required!',
                    minLength: {
                      value: 20,
                      message: 'Minimum 20 character!',
                    },
                  })}
                  name="description"
                  placeholder="Vendor details"
                  rows="4"
                  spellCheck="false"
                />
                <Error errorName={errors.description} />
              </div>
            </div>
            
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Pan Number" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Vendor pan number"
                  name="vendor-pan-number"
                  type="number"
                  placeholder="Vendor pan number"
                  maxLength = "10"
                  className="number_input"
                />
                <Error errorName={errors.pan_number} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="GST Number" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Gst number"
                  name="gst-number"
                  type="number"
                  placeholder="Gst number"
                  maxLength = "10"
                  className="number_input"
                  
                />
                <Error errorName={errors.gst_number} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Phone Number" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Phone number"
                  name="phone-number"
                  type="number"
                  placeholder="Phone number"
                  maxLength = "10"
                  className="number_input"
                />
                <Error errorName={errors.phone_number} />
              </div>
            </div>

            {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Flash Sale" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="flashSale"
                  {...register('flashSale', {
                    required: 'Flash Sale is required!',
                  })}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </Select>
                <Error errorName={errors.flashSale} />
              </div>
            </div> */}

            {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Tax1" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={100}
                  minValue={1}
                  defaultValue="0"
                  required="false"
                  label="Tax1"
                  name="tax1"
                  type="number"
                  placeholder="Tax One"
                />
                <Error errorName={errors.tax1} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Tax2" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={100}
                  minValue={1}
                  defaultValue="0"
                  required="false"
                  label="Tax2"
                  name="tax2"
                  type="number"
                  placeholder="Tax Two"
                />
                <Error errorName={errors.tax2} />
              </div>
            </div> */}

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Vendor Tag" />
              <div className="col-span-8 sm:col-span-4">
                <ReactTagInput
                  placeholder="Vendor Tag (Write then press enter to add new tag )"
                  tags={tag}
                  onChange={(newTags) => setTag(newTags)}
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Vendor" />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(VendorDrawer);
