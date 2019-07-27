package com.codecool.homenetwork.device.deviceTypes;

public enum ScreenSize {

    EDTV(5),
    HD(10),
    FULLHD(15),
    UHD(20);

    public int getBatteryDrain() {
        return batteryDrain;
    }

    private int batteryDrain;

    ScreenSize(int batteryDrain) {
        this.batteryDrain = batteryDrain;
    }
}
