package com.codecool.homenetwork.device.deviceTypes.DevicesWithScreen;

import com.codecool.homenetwork.device.Device;
import com.codecool.homenetwork.device.deviceTypes.ScreenSize;

public abstract class DevicesWithScreen extends Device {

    public ScreenSize getScreenSize() {
        return screenSize;
    }

    private ScreenSize screenSize;

    public DevicesWithScreen(int age, int batteryLife, ScreenSize size) {
        super(age, batteryLife);
        this.screenSize = size;
    }
}
