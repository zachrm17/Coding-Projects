import javax.swing.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class FCL_LineupMaker {
    private JTabbedPane tabbedPane1;
    private JTextField txtInputDriver;
    private JTextArea txtDriverList;
    private JPanel FCL_LineupMaker;
    private JButton btnAddDriver;
    private JButton btnRemoveDriver;
    private JTabbedPane tabbedPane2;
    private JTextField txtHeatOneHost;
    private JTextField txtHeatTwoHost;
    private JTextField txtHeatThreeHost;
    private JTextField txtHeatFourHost;
    private JButton confirmHostsButton;
    private JTextArea txtHeatLineups;
    private JButton generateLineupsButton;
    private JTextArea txtMains;
    private JButton btnDMain;
    private JButton btnCMain;
    private JButton btnBMain;
    private JButton btnAMain;
    private JTabbedPane tabbedPane3;
    private JButton btnHeat1;
    private JButton btnHeat2;
    private JButton btnHeat3;
    private JButton btnHeat4;
    private JTextField txtInputHeat1;
    private JTextField txtInputHeat2;
    private JTextField txtInputHeat3;
    private JTextField txtInputHeat4;
    private JTextArea txtHeat1;
    private JTextArea txtHeat2;
    private JTextArea txtHeat3;
    private JTextArea txtHeat4;
    private JTextField txtAddDMain;
    private JTextField txtAddCMain;
    private JTextField txtAddBMain;
    private JTextField txtAddAMain;
    private JButton btnAddDMain;
    private JButton btnAddCMain;
    private JButton btnAddBMain;
    private JButton btnAddAMain;
    private JTextArea txtDMainResults;
    private JTextArea txtCMainResults;
    private JTextArea txtBMainResults;
    private JTextArea txtAMainResults;
    private JTextArea txtHeat1Final;
    private JTextArea txtHeat2Final;
    private JTextArea txtHeat3Final;
    private JTextArea txtHeat4Final;
    private JTextArea txtDMainFinal;
    private JTextArea txtCMainFinal;
    private JTextArea txtBMainFinal;
    private JTextArea txtAMainFinal;
    private JButton refreshButton;
    private JButton btnRemoveHeat1;
    private JButton btnRemoveHeat2;
    private JButton btnRemoveHeat3;
    private JButton btnRemoveHeat4;
    private JButton btnRemoveDMain;
    private JButton btnRemoveCMain;
    private JButton btnRemoveBMain;
    private JButton btnRemoveAMain;

    String host1 = "";
    String host2 = "";
    String host3 = "";
    String host4 = "";

    ArrayList<String> AMain = new ArrayList<>();
    ArrayList<String> BMain = new ArrayList<>();
    ArrayList<String> CMain = new ArrayList<>();
    ArrayList<String> DMain = new ArrayList<>();
    ArrayList<String> heatOne = new ArrayList<>();
    ArrayList<String> heatTwo = new ArrayList<>();
    ArrayList<String> heatThree = new ArrayList<>();
    ArrayList<String> heatFour = new ArrayList<>();
    ArrayList<String> drivers = new ArrayList<>();

    public FCL_LineupMaker(){

        //Add or Remove Drivers from Driver's List----------------------------------------------------------------------

        btnAddDriver.addActionListener(e -> {
            txtDriverList.setText("");
            String driver = txtInputDriver.getText();
            drivers.add(driver);
            txtDriverList.append(String.valueOf(drivers));
            txtInputDriver.setText("");
        });

        txtInputDriver.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtDriverList.setText("");
                    String driver = txtInputDriver.getText();
                    drivers.add(driver);
                    txtDriverList.append(String.valueOf(drivers));
                    txtInputDriver.setText("");
                }
            }
        });

        btnRemoveDriver.addActionListener(e -> {
            txtDriverList.setText("");
            String driver = txtInputDriver.getText();
            drivers.remove(driver);
            txtDriverList.setText(String.valueOf(drivers));
            txtInputDriver.setText("");
        });

        //Set Heat Race Hosts and Create Linups Based on number of Drivers ---------------------------------------------

        confirmHostsButton.addActionListener(e -> {
            host1 = txtHeatOneHost.getText();
            host2 = txtHeatTwoHost.getText();
            host3 = txtHeatThreeHost.getText();
            host4 = txtHeatFourHost.getText();
        });


        generateLineupsButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                List<String> Group1 = new ArrayList<>();
                List<String> Group2 = new ArrayList<>();
                List<String> Group3 = new ArrayList<>();
                List<String> Group4 = new ArrayList<>();

                Collections.shuffle(drivers);

                int numDrivers = drivers.size();
                int numHosts;

                if (numDrivers < 14){
                    numHosts = 2;
                } else if (numDrivers < 20) {
                    numHosts = 3;
                } else {
                    numHosts = 4;
                }

                int totalDrivers = numDrivers + numHosts;

                if (totalDrivers <= 16){
                    //Two Heats

                    int heat1num = numDrivers/2 + 1;

                    for (int i = 0; i < heat1num; i++){
                        Group1.add(drivers.get(i));
                    }
                    for (int i = heat1num; i < numDrivers; i++){
                        Group2.add(drivers.get(i));
                    }

                    txtHeatLineups.append("Group 1: " + host1 + " " + Group1 + '\n' + '\n');
                    txtHeatLineups.append("Group 2: " + host2 + " " + Group2);

                }
                else if (totalDrivers <= 23) {
                    //Three Heats
                    int heat1num = 0;
                    int heat2num = 0;

                    if (totalDrivers == 18 || totalDrivers == 21){
                        heat1num = numDrivers/3;
                        heat2num = numDrivers/3;
                    }
                    else if (totalDrivers == 19 || totalDrivers == 22){
                        heat1num = numDrivers/3 + 1;
                        heat2num = numDrivers/3 + 1;
                    }
                    else if (totalDrivers == 17 || totalDrivers == 20 || totalDrivers == 23){
                        heat1num = numDrivers/3 + 1;
                        heat2num = numDrivers/3 + 1;
                    }

                    for (int i = 0; i < heat1num; i ++){
                        Group1.add(drivers.get(i));
                    }
                    for (int i = heat1num; i < (numDrivers - heat2num + 1); i++){
                        Group2.add(drivers.get(i));
                    }
                    for (int i = (numDrivers - heat2num + 1); i < numDrivers; i++){
                        Group3.add(drivers.get(i));
                    }

                    txtHeatLineups.append("Group 1: " + host1 + " " + Group1 + '\n' + '\n');
                    txtHeatLineups.append("Group 2: " + host2 + " " + Group2 + '\n' + '\n');
                    txtHeatLineups.append("Group 3: " + host3 + " " + Group3);
                    
                }
                else {
                    //Four Heats
                    int heat1num = 0;
                    int heat2num = 0;
                    int heat3num = 0;

                    if (totalDrivers%2 == 0 && totalDrivers%4 == 0){
                        heat1num = numDrivers/4;
                        heat2num = numDrivers/4;
                        heat3num = numDrivers/4;
                    }
                    else if (totalDrivers%2 == 0){
                        heat1num = numDrivers/4 + 1;
                        heat2num = heat1num;
                        heat3num = numDrivers/4;
                    }
                    else if (totalDrivers%3 == 0 && (totalDrivers-1)%4 == 0){
                        heat1num = numDrivers/4 + 1;
                        heat2num = numDrivers/4;
                        heat3num = numDrivers/4;
                    } else {
                        heat1num = numDrivers/4 + 1;
                        heat2num = numDrivers/4;
                        heat3num = numDrivers/4;
                    }

                    for (int i = 0; i < heat1num; i++){
                        Group1.add(drivers.get(i));
                    }
                    for (int i = heat1num; i < (heat1num + heat2num); i++){
                        Group2.add(drivers.get(i));
                    }
                    for (int i = (heat1num + heat2num); i < (numDrivers-heat3num); i++){
                        Group3.add(drivers.get(i));
                    }
                    for (int i = (numDrivers-heat3num); i < numDrivers; i++){
                        Group4.add(drivers.get(i));
                    }
                    txtHeatLineups.append("***NOTE*** \n");

                    txtHeatLineups.append("SWAP GROUPS AROUND WHEN POSTING LINEUPS TO ENSURE \n");
                    txtHeatLineups.append("HEATS 1, 2, and 3 HAVE HIGHER CARS! IF ONE HEAT HAS MORE CARS THAN OTHER, PLACE \n");
                    txtHeatLineups.append("BACK MOST DRIVER LISTED INTO HEAT WITH LOWEST CARS." + '\n' + '\n');


                    txtHeatLineups.append("Group 1: " + host1 + " " + Group1 + '\n' + '\n');
                    txtHeatLineups.append("Group 2: " + host2 + " " + Group2 + '\n' + '\n');
                    txtHeatLineups.append("Group 3: " + host3 + " " + Group3 + '\n' + '\n');
                    txtHeatLineups.append("Group 4: " + host4 + " " + Group4 + '\n' + '\n');
                }
            }
        });

        //Input Heat Race Results --------------------------------------------------------------------------------------

        btnHeat1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat1.setText("");
                String driver = txtInputHeat1.getText();
                heatOne.add(driver);
                txtInputHeat1.setText("");
                for (int i = 0; i < heatOne.size(); i++){
                    txtHeat1.append(heatOne.get(i) + '\n');
                }
            }
        });

        txtInputHeat1.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtHeat1.setText("");
                    String driver = txtInputHeat1.getText();
                    heatOne.add(driver);
                    txtInputHeat1.setText("");
                    for (int i = 0; i < heatOne.size(); i++){
                        txtHeat1.append(heatOne.get(i) + '\n');
                    }
                }
            }
        });

        btnHeat2.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat2.setText("");
                String driver = txtInputHeat2.getText();
                heatTwo.add(driver);
                txtInputHeat2.setText("");
                for (int i = 0; i < heatTwo.size(); i++){
                    txtHeat2.append(heatTwo.get(i) + '\n');
                }
            }
        });

        txtInputHeat2.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtHeat2.setText("");
                    String driver = txtInputHeat2.getText();
                    heatTwo.add(driver);
                    txtInputHeat2.setText("");
                    for (int i = 0; i < heatTwo.size(); i++){
                        txtHeat2.append(heatTwo.get(i) + '\n');
                    }
                }
            }
        });

        btnHeat3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat3.setText("");
                String driver = txtInputHeat3.getText();
                heatThree.add(driver);
                txtInputHeat3.setText("");
                for (int i = 0; i < heatThree.size(); i++){
                    txtHeat3.append(heatThree.get(i) + '\n');
                }
            }
        });

        txtInputHeat3.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtHeat3.setText("");
                    String driver = txtInputHeat3.getText();
                    heatThree.add(driver);
                    txtInputHeat3.setText("");
                    for (int i = 0; i < heatThree.size(); i++){
                        txtHeat3.append(heatThree.get(i) + '\n');
                    }
                }
            }
        });

        btnHeat4.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat4.setText("");
                String driver = txtInputHeat4.getText();
                heatFour.add(driver);
                txtInputHeat4.setText("");
                for (int i = 0; i < heatFour.size(); i++){
                    txtHeat4.append(heatFour.get(i) + '\n');
                }
            }
        });

        txtInputHeat4.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtHeat4.setText("");
                    String driver = txtInputHeat4.getText();
                    heatFour.add(driver);
                    txtInputHeat4.setText("");
                    for (int i = 0; i < heatFour.size(); i++){
                        txtHeat4.append(heatFour.get(i) + '\n');
                    }
                }
            }
        });

        //Remove Heat Race Inputs --------------------------------------------------------------------------------------

        btnRemoveHeat1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat1.setText("");
                String driver = txtInputHeat1.getText();
                heatOne.remove(driver);
                txtInputHeat1.setText("");
                for (int i = 0; i < heatOne.size(); i++){
                    txtHeat1.append(heatOne.get(i) + '\n');
                }
            }
        });
        btnRemoveHeat2.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat2.setText("");
                String driver = txtInputHeat2.getText();
                heatTwo.remove(driver);
                txtInputHeat2.setText("");
                for (int i = 0; i < heatTwo.size(); i++){
                    txtHeat2.append(heatTwo.get(i) + '\n');
                }
            }
        });
        btnRemoveHeat3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat3.setText("");
                String driver = txtInputHeat3.getText();
                heatThree.remove(driver);
                txtInputHeat3.setText("");
                for (int i = 0; i < heatThree.size(); i++){
                    txtHeat3.append(heatThree.get(i) + '\n');
                }
            }
        });
        btnRemoveHeat4.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat4.setText("");
                String driver = txtInputHeat4.getText();
                heatFour.remove(driver);
                txtInputHeat4.setText("");
                for (int i = 0; i < heatFour.size(); i++){
                    txtHeat4.append(heatFour.get(i) + '\n');
                }
            }
        });

        //Input Alphabet Soup Results ----------------------------------------------------------------------------------

        btnAddDMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtDMainResults.setText("");
                String driver = txtAddDMain.getText();
                DMain.add(driver);
                txtAddDMain.setText("");
                for (int i = 0; i < DMain.size(); i++){
                    txtDMainResults.append(DMain.get(i) + '\n');
                }
            }
        });

        txtAddDMain.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtDMainResults.setText("");
                    String driver = txtAddDMain.getText();
                    DMain.add(driver);
                    txtAddDMain.setText("");
                    for (int i = 0; i < DMain.size(); i++){
                        txtDMainResults.append(DMain.get(i) + '\n');
                    }
                }
            }
        });

        btnAddCMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtCMainResults.setText("");
                String driver = txtAddCMain.getText();
                CMain.add(driver);
                txtAddCMain.setText("");
                for (int i = 0; i < CMain.size(); i++){
                    txtCMainResults.append(CMain.get(i) + '\n');
                }
            }
        });

        txtAddCMain.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtCMainResults.setText("");
                    String driver = txtAddCMain.getText();
                    CMain.add(driver);
                    txtAddCMain.setText("");
                    for (int i = 0; i < CMain.size(); i++){
                        txtCMainResults.append(CMain.get(i) + '\n');
                    }
                }
            }
        });

        btnAddBMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtBMainResults.setText("");
                String driver = txtAddBMain.getText();
                BMain.add(driver);
                txtAddBMain.setText("");
                for (int i = 0; i < BMain.size(); i++){
                    txtBMainResults.append(BMain.get(i) + '\n');
                }
            }
        });

        txtAddBMain.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtBMainResults.setText("");
                    String driver = txtAddBMain.getText();
                    BMain.add(driver);
                    txtAddBMain.setText("");
                    for (int i = 0; i < BMain.size(); i++){
                        txtBMainResults.append(BMain.get(i) + '\n');
                    }
                }
            }
        });

        btnAddAMain.addActionListener(new ActionListener()  {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtAMainResults.setText("");
                String driver = txtAddAMain.getText();
                AMain.add(driver);
                txtAddAMain.setText("");
                for (int i = 0; i < AMain.size(); i++){
                    txtAMainResults.append(AMain.get(i) + '\n');
                }
            }
        });

        txtAddAMain.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int key = e.getKeyCode();
                if(key == KeyEvent.VK_ENTER){
                    txtAMainResults.setText("");
                    String driver = txtAddAMain.getText();
                    AMain.add(driver);
                    txtAddAMain.setText("");
                    for (int i = 0; i < AMain.size(); i++){
                        txtAMainResults.append(AMain.get(i) + '\n');
                    }
                }
            }
        });

        //Remove Alphabet Soup Inputs ----------------------------------------------------------------------------------

        btnRemoveDMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtDMainResults.setText("");
                String driver = txtAddDMain.getText();
                DMain.remove(driver);
                txtAddDMain.setText("");
                for (int i = 0; i < DMain.size(); i++){
                    txtDMainResults.append(DMain.get(i) + '\n');
                }
            }
        });
        btnRemoveCMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtCMainResults.setText("");
                String driver = txtAddCMain.getText();
                CMain.remove(driver);
                txtAddCMain.setText("");
                for (int i = 0; i < CMain.size(); i++){
                    txtCMainResults.append(CMain.get(i) + '\n');
                }
            }
        });
        btnRemoveBMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtBMainResults.setText("");
                String driver = txtAddBMain.getText();
                BMain.remove(driver);
                txtAddBMain.setText("");
                for (int i = 0; i < BMain.size(); i++){
                    txtBMainResults.append(BMain.get(i) + '\n');
                }
            }
        });
        btnRemoveAMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtAMainResults.setText("");
                String driver = txtAddAMain.getText();
                AMain.remove(driver);
                txtAddAMain.setText("");
                for (int i = 0; i < AMain.size(); i++){
                    txtAMainResults.append(AMain.get(i) + '\n');
                }
            }
        });

        //Create Alphabet Soup Lineups ---------------------------------------------------------------------------------


        btnDMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int numDrivers = drivers.size();
                int totalDrivers;

                if (numDrivers < 14){
                    totalDrivers = numDrivers + 2;
                } else if (numDrivers < 20) {
                    totalDrivers = numDrivers + 3;
                } else {
                    totalDrivers = numDrivers + 4;
                }

                txtMains.setText("*** D-MAIN LINEUP ***\n\n");

                try{
                    if (totalDrivers < 39){
                        txtMains.append("THERE IS NOT ENOUGH CARS FOR A D-MAIN");
                    }
                    else{
                        for (int i = 9; i < heatOne.size(); i++) {
                            txtMains.append((heatOne.get(i) + ", " + heatTwo.get(i)) + '\n');
                            txtMains.append((heatThree.get(i) + ", " + heatOne.get(i)) + '\n');
                        }
                    }
                }   catch (IndexOutOfBoundsException ex){
                    System.out.println("Not a full D-Main field");
                }

            }
        });

        btnCMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int numDrivers = drivers.size();
                int totalDrivers;

                if (numDrivers < 14){
                    totalDrivers = numDrivers + 2;
                } else if (numDrivers < 20) {
                    totalDrivers = numDrivers + 3;
                } else {
                    totalDrivers = numDrivers + 4;
                }

                txtMains.setText("*** C-MAIN LINEUP ***\n\n");

                try{
                    if (totalDrivers < 29){
                        txtMains.append("THERE IS NOT ENOUGH CARS FOR A C-MAIN");
                    }
                    else if (totalDrivers < 39){
                        txtMains.append((heatOne.get(6) + ", " + heatTwo.get(6)) + '\n');
                        txtMains.append((heatThree.get(6) + ", " + heatOne.get(6)) + '\n');
                        txtMains.append((heatOne.get(7) + ", " + heatTwo.get(7)) + '\n');
                        txtMains.append((heatThree.get(7) + ", " + heatOne.get(7)) + '\n');
                        txtMains.append((heatOne.get(8) + ", " + heatTwo.get(8)) + '\n');
                        txtMains.append((heatThree.get(8) + ", " + heatOne.get(8)) + '\n');
                        txtMains.append((heatOne.get(9) + ", " + heatTwo.get(9)) + '\n');
                        txtMains.append((heatThree.get(9) + ", " + heatOne.get(9)) + '\n');
                    }
                    else {
                        txtMains.append((heatOne.get(6) + ", " + heatTwo.get(6)) + '\n');
                        txtMains.append((heatThree.get(6) + ", " + heatOne.get(6)) + '\n');
                        txtMains.append((heatOne.get(7) + ", " + heatTwo.get(7)) + '\n');
                        txtMains.append((heatThree.get(7) + ", " + heatOne.get(7)) + '\n');
                        txtMains.append((heatOne.get(8) + ", " + heatTwo.get(8)) + '\n');
                        txtMains.append((heatThree.get(8) + ", " + heatOne.get(8)) + '\n');
                        txtMains.append((DMain.get(0) + ", " + DMain.get(1)));
                    }
                } catch (IndexOutOfBoundsException ex){
                    System.out.println("Not a full C-Main field");
                }
            }
        });

        btnBMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int numDrivers = drivers.size();
                int totalDrivers;

                if (numDrivers < 14){
                    totalDrivers = numDrivers + 2;
                } else if (numDrivers < 20) {
                    totalDrivers = numDrivers + 3;
                } else {
                    totalDrivers = numDrivers + 4;
                }

                txtMains.setText("*** B-MAIN LINEUP ***\n\n");

                try {
                    if (totalDrivers <= 16) {
                        txtMains.append("THERE IS NOT ENOUGH CARS FOR A B-MAIN");
                    } else if (totalDrivers > 16 && totalDrivers <= 23) {
                        txtMains.append((heatOne.get(4) + ", " + heatTwo.get(4)) + '\n');
                        txtMains.append((heatThree.get(4) + ", " + heatOne.get(5)) + '\n');
                        txtMains.append((heatTwo.get(5) + ", " + heatThree.get(5)) + '\n');
                        txtMains.append((heatOne.get(6) + ", " + heatTwo.get(6)) + '\n');
                        txtMains.append((heatThree.get(6) + ", " + heatOne.get(7)) + '\n');
                        txtMains.append((heatTwo.get(7)));
                    } else if (totalDrivers < 29) {
                        txtMains.append((heatOne.get(3) + ", " + heatTwo.get(3)) + '\n');
                        txtMains.append((heatThree.get(3) + ", " + heatFour.get(3)) + '\n');
                        txtMains.append((heatOne.get(4) + ", " + heatTwo.get(4)) + '\n');
                        txtMains.append((heatThree.get(4) + ", " + heatFour.get(4)) + '\n');
                        txtMains.append((heatOne.get(5) + ", " + heatTwo.get(5)) + '\n');
                        txtMains.append((heatThree.get(5) + ", " + heatFour.get(5)) + '\n');
                        txtMains.append((heatOne.get(6) + ", " + heatTwo.get(6)) + '\n');
                        txtMains.append((heatThree.get(6) + ", " + heatFour.get(6)) + '\n');
                    } else if (totalDrivers >= 30) {
                        txtMains.append((heatOne.get(3) + ", " + heatTwo.get(3)) + '\n');
                        txtMains.append((heatThree.get(3) + ", " + heatFour.get(3)) + '\n');
                        txtMains.append((heatOne.get(4) + ", " + heatTwo.get(4)) + '\n');
                        txtMains.append((heatThree.get(4) + ", " + heatFour.get(4)) + '\n');
                        txtMains.append((heatOne.get(5) + ", " + heatTwo.get(5)) + '\n');
                        txtMains.append((heatThree.get(5) + ", " + heatFour.get(5)) + '\n');
                        txtMains.append((CMain.get(0) + ", " + CMain.get(1)) + '\n');
                        txtMains.append((CMain.get(2) + ", " + CMain.get(3)) + '\n');
                    }
                }catch (IndexOutOfBoundsException ex){
                    System.out.println("Not a full B-Main Field");
                }
            }
        });

        btnAMain.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int numDrivers = drivers.size();
                int totalDrivers;

                if (numDrivers < 14){
                    totalDrivers = numDrivers + 2;
                } else if (numDrivers < 20) {
                    totalDrivers = numDrivers + 3;
                } else {
                    totalDrivers = numDrivers + 4;
                }

                txtMains.setText("*** A-MAIN LINEUP ***\n\n");

                try {
                    if (totalDrivers <= 16) {
                        //Two Heats
                        for (int i = 0; i < heatOne.size(); i++) {
                            txtMains.append(heatOne.get(i) + ", " + heatTwo.get(i) + '\n');
                        }
                    } else if (totalDrivers < 24){
                        //Three Heats
                        txtMains.append((heatOne.get(0) + ", " + heatTwo.get(0)) + '\n');
                        txtMains.append((heatThree.get(0) + ", " + heatOne.get(1)) + '\n');
                        txtMains.append((heatTwo.get(1) + ", " + heatThree.get(1)) + '\n');
                        txtMains.append((heatOne.get(2) + ", " + heatTwo.get(2)) + '\n');
                        txtMains.append((heatThree.get(2) + ", " + heatOne.get(3)) + '\n');
                        txtMains.append((heatTwo.get(3) + ", " + heatThree.get(3)) + '\n');
                        txtMains.append((BMain.get(0)) + ", " + BMain.get(1) + '\n');
                        txtMains.append((BMain.get(2)) + ", " + BMain.get(3) + '\n');
                    } else {
                        txtMains.append((heatOne.get(0) + ", " + heatTwo.get(0)) + '\n');
                        txtMains.append((heatThree.get(0) + ", " + heatFour.get(0)) + '\n');
                        txtMains.append((heatOne.get(1) + ", " + heatTwo.get(1)) + '\n');
                        txtMains.append((heatThree.get(1) + ", " + heatFour.get(1)) + '\n');
                        txtMains.append((heatOne.get(2) + ", " + heatTwo.get(2)) + '\n');
                        txtMains.append((heatThree.get(2) + ", " + heatFour.get(2)) + '\n');
                        txtMains.append((BMain.get(0)) + ", " + BMain.get(1) + '\n');
                        txtMains.append((BMain.get(2)) + ", " + BMain.get(3) + '\n');
                    }
                    //NEED FOUR HEATS
                } catch (IndexOutOfBoundsException ex){
                    System.out.println("Not a full field");
                }
            }
        });

        refreshButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtHeat1Final.setText("");
                txtHeat2Final.setText("");
                txtHeat3Final.setText("");
                txtHeat4Final.setText("");
                txtDMainFinal.setText("");
                txtCMainFinal.setText("");
                txtBMainFinal.setText("");
                txtAMainFinal.setText("");

                for (int i = 0; i < heatOne.size(); i++){
                    txtHeat1Final.append((i + 1) + ".) " + heatOne.get(i) + '\n');
                }
                for (int i = 0; i < heatTwo.size(); i++){
                    txtHeat2Final.append((i + 1) + ".) " + heatTwo.get(i) + '\n');
                }
                for (int i = 0; i < heatThree.size(); i++){
                    txtHeat3Final.append((i + 1) + ".) " + heatThree.get(i) + '\n');
                }
                for (int i = 0; i < heatFour.size(); i++){
                    txtHeat4Final.append((i + 1) + ".) " + heatFour.get(i) + '\n');
                }
                for (int i = 0; i < DMain.size(); i++){
                    txtDMainFinal.append((i + 1) + ".) " + DMain.get(i) + '\n');
                }
                for (int i = 0; i < CMain.size(); i++){
                    txtCMainFinal.append((i + 1) + ".) " + CMain.get(i) + '\n');
                }
                for (int i = 0; i < BMain.size(); i++){
                    txtBMainFinal.append((i + 1) + ".) " + BMain.get(i) + '\n');
                }
                for (int i = 0; i < AMain.size(); i++){
                    txtAMainFinal.append((i + 1) + ".) " + AMain.get(i) + '\n');
                }

            }
        });
    }

    public static void main(String[] args){
        JFrame frame = new JFrame("FCL_LineupMaker");
        frame.setContentPane(new FCL_LineupMaker().FCL_LineupMaker);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }
}
