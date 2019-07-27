package com.codecool.homenetwork.device.deviceTypes.DevicesWithScreen;

import com.codecool.homenetwork.device.deviceTypes.ScreenSize;

public class Normal extends DevicesWithScreen {


    private int yearOfManufacturing;

    public Normal(int age, int batteryLife, int year, ScreenSize size) {
        super(age, batteryLife, size);
        this.yearOfManufacturing = year;
    }

    public int getYearOfManufacturing() {
        return yearOfManufacturing;
    }


    public int getBatteryLife() {
        return this.batteryLife = batteryLife - age * 3;
    }
}
