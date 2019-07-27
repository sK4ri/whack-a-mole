package com.codecool.homenetwork;

import com.codecool.homenetwork.device.Device;

import java.util.ArrayList;
import java.util.List;

public class HomeNetwork {

    private List<Device> listOfDevices = new ArrayList<>();

    public void addDevice(Device device) {
        listOfDevices.add(device);
    }

    public List<Device> getListOfDevices() {
        return listOfDevices;
    }
}
