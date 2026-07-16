package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the Method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Pass Mock Object to Service
        MyService service = new MyService(mockApi);

        // Call Method
        String result = service.fetchData();

        // Verify Result
        assertEquals("Mock Data", result);
    }
}