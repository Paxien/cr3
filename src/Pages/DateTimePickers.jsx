"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [date1, setDate1] = React.useState(new Date());
  const [dateRange, setDateRange] = React.useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  });
  const [selectedTime, setSelectedTime] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const [dateTimeDate, setDateTimeDate] = React.useState(new Date());
  const [dateTimeTime, setDateTimeTime] = React.useState("");

  return (
    <div className="flex flex-col p-8 gap-8">
      <div className="text-3xl font-bold mb-4">
        Date & Time Picker Components
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Single Date Picker</div>
          <div className="flex gap-4">
            <ShadcnUI.Calendar
              mode="single"
              selected={date1}
              onSelect={setDate1}
              className="rounded-md border"
            />
          </div>
          <div className="mt-2 p-4 bg-gray-100 rounded-md">
            <pre className="text-sm overflow-auto">
              {`<ShadcnUI.Calendar
  mode="single"
  selected={date1}
  onSelect={setDate1}
  className="rounded-md border"
/>`}
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Date Range Picker</div>
          <div className="flex gap-4">
            <ShadcnUI.Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              className="rounded-md border"
            />
          </div>
          <div className="mt-2 p-4 bg-gray-100 rounded-md">
            <pre className="text-sm overflow-auto">
              {`<ShadcnUI.Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  numberOfMonths={2}
  className="rounded-md border" 
/>`}
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Time Selector</div>
          <div className="flex gap-4">
            <ShadcnUI.CustomSelect
              placeholder="Select time..."
              value={selectedTime}
              onValueChange={setSelectedTime}
              groups={[
                {
                  items: [
                    { value: "12:00", label: "12:00 PM" },
                    { value: "13:00", label: "1:00 PM" },
                    { value: "14:00", label: "2:00 PM" },
                    { value: "15:00", label: "3:00 PM" },
                    { value: "16:00", label: "4:00 PM" },
                  ],
                },
              ]}
            />
          </div>
          <div className="mt-2 p-4 bg-gray-100 rounded-md">
            <pre className="text-sm overflow-auto">
              {`<ShadcnUI.CustomSelect
  placeholder="Select time..."
  value={selectedTime}
  onValueChange={setSelectedTime}
  groups={[{
    items: [
      { value: "12:00", label: "12:00 PM" },
      { value: "13:00", label: "1:00 PM" }
    ]
  }]}
/>`}
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Year Picker</div>
          <div className="flex gap-4">
            <ShadcnUI.CustomSelect
              placeholder="Select year..."
              value={selectedYear}
              onValueChange={setSelectedYear}
              groups={[
                {
                  items: Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return {
                      value: year.toString(),
                      label: year.toString(),
                    };
                  }),
                },
              ]}
            />
          </div>
          <div className="mt-2 p-4 bg-gray-100 rounded-md">
            <pre className="text-sm overflow-auto">
              {`<ShadcnUI.CustomSelect
  placeholder="Select year..."
  value={selectedYear}
  onValueChange={setSelectedYear}
  groups={[{
    items: Array.from({length: 10}, (_, i) => {
      const year = new Date().getFullYear() - i;
      return {
        value: year.toString(),
        label: year.toString()
      }
    })
  }]}
/>`}
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Date & Time Picker</div>
          <div className="flex gap-4">
            <div className="grid gap-2">
              <ShadcnUI.Calendar
                mode="single"
                selected={dateTimeDate}
                onSelect={setDateTimeDate}
                className="rounded-md border"
              />
              <ShadcnUI.CustomSelect
                placeholder="Select time..."
                value={dateTimeTime}
                onValueChange={setDateTimeTime}
                groups={[
                  {
                    items: [
                      { value: "09:00", label: "9:00 AM" },
                      { value: "10:00", label: "10:00 AM" },
                      { value: "11:00", label: "11:00 AM" },
                      { value: "12:00", label: "12:00 PM" },
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div className="mt-2 p-4 bg-gray-100 rounded-md">
            <pre className="text-sm overflow-auto">
              {`<div className="grid gap-2">
  <ShadcnUI.Calendar
    mode="single"
    selected={dateTimeDate}
    onSelect={setDateTimeDate}
    className="rounded-md border"
  />
  <ShadcnUI.CustomSelect
    placeholder="Select time..."
    value={dateTimeTime} 
    onValueChange={setDateTimeTime}
    groups={[{
      items: [
        { value: "09:00", label: "9:00 AM" },
        { value: "10:00", label: "10:00 AM" }
      ]
    }]}
  />
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;