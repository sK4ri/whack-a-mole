package com.codecool.homenetwork.device.deviceTypes.DevicesWithScreen;

import com.codecool.homenetwork.HomeNetwork;
import com.codecool.homenetwork.device.Device;
import com.codecool.homenetwork.device.deviceTypes.ScreenSize;

import java.util.List;
import java.util.stream.Collectors;

public class Smart extends DevicesWithScreen {


    private String name;

    public Smart(int age, int batteryLife, String name, ScreenSize size) {
        super(age, batteryLife, size);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public int getNumOfDevicesWithinParameters(HomeNetwork hn, int parameter) {
        return getFilteredList(hn.getListOfDevices(), parameter).size() - 1;
    }

    private List<Device> getFilteredList(List<Device> devices, int param) {
        return devices
                .stream()
                .filter(device -> device.getRemainingPower()
                        <= this.getRemainingPower() + param && device.getRemainingPower() >= this.getRemainingPower() - param)
                .collect(Collectors.toList());
    }

    @Override
    public int getRemainingPower() {
        return this.batteryLife = batteryLife - age * 15 - getScreenSize().getBatteryDrain();
    }
}