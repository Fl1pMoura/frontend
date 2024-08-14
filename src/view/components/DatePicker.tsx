
import { ptBR } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface DatePickerProps{
  value: Date,
  onChange(date: Date): void,
}

export function DatePicker({value, onChange}: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      mode="single"
      selected={value}
      onSelect={(date) => onChange(date ?? new Date())}
      classNames={{
        caption_label: "flex items-center justify-between capitalize font-medium",
        chevron: "fill-teal-800 hover:fill-teal-900 transition",
        button_next: "text-teal-800 flex items-center justify-center !bg-transparent transition",
        button_previous: "text-teal-800 flex items-center justify-center !bg-transparent transition",
        weekday: "uppercase text-xs text-gray-500 font-medium pt-1 pb-2",
        day_button: "text-gray-700 cursor-pointer size-10 hover:bg-teal-100 rounded-full transition",
        today: "bg-gray-100 font-bold text-gray-900 rounded-full transition",
        selected: "!bg-teal-900 text-white font-medium rounded-full transition",
      }}
    />
  );
}
