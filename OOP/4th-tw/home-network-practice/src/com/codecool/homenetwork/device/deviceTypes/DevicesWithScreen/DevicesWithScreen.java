package com.codecool.homenetwork.device.deviceTypes.DevicesWithScreen;

import com.codecool.homenetwork.device.Device;
import com.codecool.homenetwork.device.deviceTypes.ScreenSize;

public abstract class DevicesWithScreen extends Device {


    private ScreenSize screenSize;

    DevicesWithScreen(int age, int batteryLife, ScreenSize size) {
        super(age, batteryLife);
        this.screenSize = size;
    }

    ScreenSize getScreenSize() { return screenSize; }
}
